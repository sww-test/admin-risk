<template>
  <div
    class="login"
    :style="[loginStyle]"
  >
    <div class="login-logo">
      <img
        class="login-logo__img"
        src="/assets/login_images/gsp.png"
      >
      <div class="login-logo__text">
        药品经营质量管理规范
      </div>
    </div>
    <div class="login-content">
      <div class="login-content__left">
        <img
          class="login-content__logo"
          src="/assets/login_images/logo.png"
        >
        <div class="login-content__desc">
          欢迎登录
        </div>
        <div class="login-content__name">
          <span>风控管理平台</span>
          <span
            v-if="showTest"
            class="text-lg"
          >（测试）</span>
        </div>
        <el-dropdown v-if="showTest">
          <el-button>
            <span>快速登录</span>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$linkTo('/login')">
                总公司
              </el-dropdown-item>
              <el-dropdown-item @click="$linkTo('/login')">
                子公司
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="login-content__right flex justify-center items-center">
        <el-form
          ref="dataFormRef"
          :model="dataForm"
          :rules="dataRules"
          label-position="top"
          status-icon
          class="login-content__form"
        >
          <el-form-item
            prop="name"
            label="超级管理员账号"
          >
            <el-input v-model="dataForm.name"></el-input>
          </el-form-item>
          <el-form-item
            prop="pass"
            label="密码"
          >
            <el-input
              v-model="dataForm.pass"
              show-password
              @keyup.enter.native="onLogin()"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-dropdown @command="onLogin">
              <el-button type="primary">
                登录<i class="el-icon-arrow-down el-icon--right" />
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="administrators">
                    管理员
                  </el-dropdown-item>
                  <el-dropdown-item command="headquarters">
                    总公司
                  </el-dropdown-item>
                  <el-dropdown-item command="subsidiary">
                    子公司
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-no">
      粤ICP备123456号-3
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginVip',
  data () {
    return {
      dataForm: {
        name: 'admin',
        pass: '123456'
      },
      dataRules: {
        name: [
          { required: true, message: '请输入超级管理员账号', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
    ...mapState(['layoutInfo']),
    loginStyle () {
      return {
        width: this.layoutInfo.windowInfo.width + 'px',
        height: this.layoutInfo.windowInfo.height + 'px'
      }
    },
    showTest () {
      return import.meta.env.VITE_LOGIN_TEST === 'true'
    }
  },
  methods: {
    ...mapActions('user', ['loginAdmin']),
    onLogin (type = 'headquarters') {
      this.$refs.dataFormRef.validate((valid) => {
        if (!valid) return false
        this.loading = true
        this.loginAdmin(type).then(() => {
          this.loading = false
          this.$linkTo('/home')
        }, (err) => {
          this.loading = false
          this.$message.error(err)
        })
      })
    }
  }
})
</script>
<style lang="scss" scoped>
:deep(.el-form--label-top .el-form-item__label) {
  padding: 0;
  line-height: 30px;
}

.login {
  background-size: cover;
  background-image: url("/assets/login_images/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 22px;
    left: 34px;

    &__img {
      width: 95px;
      height: 59px;
    }

    &__text {
      font-size: 12 rpx;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 17 rpx;
      margin-top: 16px;
    }
  }

  &-content {
    width: 880px;
    height: 700px;
    display: flex;

    &__left,
    &__right {
      flex: 1;
      height: 100%;
      overflow: hidden;
      background-color: #FFFFFF;
    }

    &__left {
      padding: 20px 0 0 26px;
      background-color: rgba(3, 35, 140, 0.8);
    }

    &__logo {
      width: 222px;
      height: 24px;
    }

    &__desc {
      font-size: 20px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 36px;
      margin-top: 236px;
    }

    &__name {
      font-size: 48px;
      font-weight: 600;
      color: #FFFFFF;
    }

    &__form {
      width: 300px;
    }

    &__btn {
      width: 120px;
    }
  }

  &-no {
    font-size: 12px;
    color: #FFFFFF;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, 0);
  }
}

@media screen and (min-width: 1200px) {
  .login {
    &-logo {
      transform: scale(0.9);
    }

    &-content {
      transform: scale(0.9);
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1200px) {
  .login {
    &-logo {
      transform: scale(0.7);
    }

    &-content {
      transform: scale(0.7);
    }
  }
}

@media screen and (max-width: 900px) {
  .login {
    &-logo {
      transform: scale(0.5);
    }

    &-content {
      transform: scale(0.5);
    }
  }
}
</style>
