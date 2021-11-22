<template>
  <div class="chat-body">
    <div class="chat-body-content">
      <div
        class="chat-body-content-messages green-loader"
        ref="messagesBody"
        v-loading="isLoading.fetch"
      >
        <div
          v-for="message in mappedMessages"
          :key="message.id"
          :class="'message-box message-' + message.side"
        >
          <div class="message">
            <span class="message-creator" v-if="message.user_id !== user.uid">{{
              message.user_name
            }}</span>
            <span class="message-text">{{ message.text }}</span>
          </div>
        </div>
      </div>
      <div class="chat-body-menu">
        <el-input placeholder="You're message" v-model="message" clearable>
          <el-button
            slot="append"
            @click="sendMessage"
            :disabled="isLoading.send"
            >Send</el-button
          >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import * as fb from "../../firebase/firebase";

/**
 * Chat
 * @displayName Chat
 */

export default {
  data() {
    return {
      messages: [],
      isLoading: {
        send: false,
        fetch: false
      },
      message: ""
    };
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    /**
     * Получение списка сообщений
     */
    fetchMessages() {
      this.isLoading.fetch = true;
      fb.chatsCollection
        .doc(this.$route.params.chatId)
        .collection("messages")
        .orderBy("date")
        .onSnapshot(querySnapshot => {
          this.messages = [];
          querySnapshot.forEach(doc => {
            this.messages = [...this.messages, { id: doc.id, ...doc.data() }];
          });
          this.isLoading.fetch = false;
          this.scrollToBottom();
        });
    },
    /**
     * Отправка сообщения
     */
    sendMessage() {
      if (this.message) {
        this.isLoading.send = true;

        fb.chatsCollection
          .doc(this.$route.params.chatId)
          .collection("messages")
          .add({
            text: this.message,
            date: new Date(),
            user_id: this.user.uid,
            user_name: this.getFullName(this.user)
          })
          .then(() => {
            this.message = "";
            this.isLoading.send = false;
            this.scrollToBottom();
          });
      }
    },
    /**
     * Скролл в нижнюю часть контейнера
     */
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesBody;
        container.scrollTop = container.scrollHeight;
      });
    },
    /**
     * Получение полного имени пользователя
     * @param {Object} user
     * @returns {string}
     */
    getFullName(user) {
      return user.firstName + " " + user.secondName;
    }
  },
  computed: {
    /**
     * Установка положения сообщений
     */
    mappedMessages() {
      return this.messages.map(message => {
        return {
          ...message,
          side: message.user_id === this.user.uid ? "right" : "left"
        };
      });
    },
    /**
     * Получение данных пользователя
     */
    user() {
      return this.$store.getters.userProfile;
    }
  },
  watch: {
    $route() {
      this.fetchMessages();
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/variables.scss";

.chat-body {
  height: 90%;
  &-content {
    position: relative;
    &-messages {
      padding: 20px;
      height: 65vh;
      overflow: auto;
      .message-box {
        display: flex;
        &.message-right {
          justify-content: flex-end;
          & > .message {
            border-bottom-right-radius: 5px;
          }
        }
        &.message-left {
          justify-content: flex-start;
          & > .message {
            border-bottom-left-radius: 5px;
          }
        }
        .message {
          border-radius: 30px;
          color: $textColor;
          background-color: $greenColor;
          padding: 10px 15px;
          margin-bottom: 10px;
          max-width: 350px;

          &-text {
            font-size: 18px;
          }
          &-creator {
            font-size: 10px;
            text-decoration: underline;
            font-weight: bold;
            display: block;
          }
        }
      }
    }
  }
  &-menu {
    background-color: white;
    border-top: 1px solid $greyBorder;
    padding: 20px;
  }
}
</style>
