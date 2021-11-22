<template>
  <div class="chats">
    <el-card class="chats-card">
      <div slot="header" class="chats-card-header">
        <span>Chat</span>
      </div>
      <el-row class="chats-main">
        <el-col :span="6" class="chats-items">
          <div class="chats-main-input">
            <el-input placeholder="Chat name" v-model="chatName">
              <el-button slot="append" @click="createChat">
                <i class="el-icon-plus"></i>
              </el-button>
            </el-input>
          </div>
          <ul class="chats-items-list green-loader" v-loading="isLoading">
            <li v-for="chat in chats" :key="chat.id">
              <router-link :to="{ name: 'Chat', params: { chatId: chat.id } }">
                <div class="chats-user">
                  {{ chat.name }}
                </div>
              </router-link>
            </li>
          </ul>
        </el-col>
        <el-col :span="18">
          <router-view />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import * as fb from "../firebase/firebase";
/**
 * Chats
 * @displayName Chats
 */
export default {
  data() {
    return {
      chats: [],
      chatName: "",
      isLoading: false
    };
  },
  methods: {
    /**
     * Получение списка чатов
     */
    fetchChats() {
      this.isLoading = true;
      fb.chatsCollection.onSnapshot(querySnapshot => {
        this.chats = [];
        querySnapshot.forEach(doc => {
          this.chats = [...this.chats, { id: doc.id, ...doc.data() }];
        });
        this.isLoading = false;
      });
    },
    /**
     * Создать новый чат
     */
    createChat() {
      if (this.chatName) {
        fb.chatsCollection
          .add({
            name: this.chatName
          })
          .then(() => (this.chatName = ""));
      }
    }
  },
  mounted() {
    this.fetchChats();
  }
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.router-link-active {
  div {
    background-color: $greenColor;
    color: white;
  }
}
.chats {
  &-card {
    .el-card__body {
      padding: 0;
    }
  }
  &-main {
    &-input {
      padding: 5px;
      border-bottom: 1px solid $greyBorder;
    }
  }
  &-items {
    border-right: 1px solid $greyBorder;
    &-list {
      height: 72vh;
      overflow: auto;
      a {
        text-decoration-line: none;
        color: black;
      }
    }
  }
  &-user {
    padding: 10px 20px;
    border-bottom: 1px solid $greyBorder;
  }
}
</style>
