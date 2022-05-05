<template>
  <div class="login-register">
    <!--视频-->
    <div id="video">
      <div class="mask"></div>
      <div class="hide-mask"></div>
      <video playsinline="" autoplay="" muted="" loop="">
        <source src="../assets/images/logo.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>
    <!--header-->
    <div class="header">
      <div class="container_warp">
        <div class="header-logo">
          <a href="index.html">PCBgogo</a>
        </div>
        <ul class="nav">
          <li class="active"><a href="index.html" class="home">Home</a></li>
          <li><a href="javascript:void(0)">PCB Instant Quote</a></li>
          <li><a href="javascript:void(0)">
            PCB Assembly
          </a></li>
          <li><a href="javascript:void(0)">
            Feedback
          </a></li>
          <li><a href="javascript:void(0)">
            About Us
          </a></li>
          <li><a href="javascript:void(0)">
            Help center
          </a></li>
        </ul>
      </div>
    </div>
    <div class="warp-content">
      <div class="login-box ">
        <div class="title-name">Register / Sign In</div>
        <div class="login-l">
          <div class="parent-box">
            <div class="title">CREATE ACCOUNT</div>
            <div class="register-text">
              $50 coupon for new registrant.
            </div>
            <div class="des-box">
              You'll need to confirm that this email belongs to you.
              <br>PCBGOGO promises to keep your private information 100% safe.
            </div>
            <div class="login-form">
              <form action="#" method="post" ref="registerForm">
                <div class="form-item">
                  <div class="check-error" v-show="registerForm.singleFlag===false">邮箱已存在,请更换新的用户邮箱</div>
                  <span class="iconfont icon-mailyoujian e-mail"></span>
                  <input type="email" v-model="registerForm.email" @focus="focusItemFn" @blur="blurItemFn"
                         class="email" @keyup="singletonNameFn" placeholder="Email Address">
                </div>
                <div class="form-item">
                  <span class="iconfont icon-locksuo"></span>
                  <input type="password" v-model="registerForm.pwd" autocomplete="autocomplete" @focus="focusItemFn"
                         @blur="blurItemFn"
                         class="password"
                         placeholder="Create Password">
                </div>
                <div class="form-item">
                  <span class="iconfont icon-shielddunpai"></span>
                  <input type="password" v-model="registerForm.confirmPwd" autocomplete="autocomplete"
                         @focus="focusItemFn"
                         @blur="blurItemFn" class="yan-zheng"
                         placeholder="Confirm Password">
                </div>
                <button class="registration-btn js-registration-btn" type="button" @click="registerFn('registerForm')">
                  <span class="reg-text">Register</span>
                  <span class="iconfont icon-arrowrightyoujiantou"></span>
                </button>
                <label class="agreement-tips js-agreement-tips">
                  <input type="checkbox" v-model="isService">
                  By creating an account, you agree to the
                  <a href="" target="_blank">Terms of Service</a>
                  and
                  <a href="http://www.pcbgogo.com/privacy_policy.html" target="_blank">Privacy Policy &
                    Agreement</a>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div class="login-r">
          <div class="parent-box">
            <div class="title">SIGN IN</div>
            <div class="login-r-info">
              <div class="login-logo">
                <img src="../assets/images/login-img.svg" alt="logo" width="40" height="40">
              </div>
              <div class="info-text">
                Welcome back!
              </div>
            </div>
            <div class="login-form">
              <form action="#" method="post">
                <div class="form-item">
                  <span class="iconfont icon-mailyoujian e-mail"></span>
                  <input type="email" @focus="focusItemFn" @blur="blurItemFn" v-model="loginForm.email" class="email"
                         placeholder="Email Address">
                </div>
                <div class="form-item">
                  <span class="iconfont icon-locksuo"></span>
                  <input type="password" @focus="focusItemFn" @blur="blurItemFn" v-model="loginForm.pwd"
                         class="password"
                         placeholder="Password" autocomplete="autocomplete">
                </div>
                <div class="keep-box">
                  <input type="checkbox" id="keep-pwd" v-model="isKeep"><label>Keep me signed in</label>
                </div>
                <button type="button" class="sign-in-btn " @click="signInFn">SIGN IN</button>
              </form>
              <div class="forget-tips">
                <a href="retrieve-password.html">
                  Forget password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="bottom-p">Copyright © 2015 PCBGOGO. All rights reserved. Shenzhen JDB Technology Co., Ltd.Address: No.
        15,
        Zhongxing Road, Kengzi Street, Pingshan District, Shenzhen, 518000, China</p>
    </div>
    <!--勾选协议弹窗弹窗-->
    <div class="go-window-pop js-checkAgree-pop">
      <div class="go-window-body">
        <div class="agreement-pop">
          <div class="agreement-text">
            <div class="thanks-title">
              Thanks for registering for our membership!
            </div>
            <div class="thanks-des">
              The following policy helps you understand the principle of PCBgogo's collection and storage of
              personal information, as well as all your related rights.
              <br> In order to access our service, please learn all the details on the Terms of Service and Privacy
              Policy & Agreement.
              <br> If you agree, click "ok" to start!
            </div>
          </div>
          <div class="form-tool">
            <button class="cancel" type="button">
              Cancel
            </button>
            <button class="agree" type="button">
              Agree
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--完善信息弹窗-->
    <div class="go-window-pop js-enemyBullet-pop">
      <div class="go-window-body">
        <div class="enemyBullet-pop">
          <div class="enemy-l">
            <div class="enemy-name">
              完善个人信息
            </div>
            <dl class="enemy-text">
              <dt>
                完善以下个人信息有那些好处：
              </dt>
              <dd>
                1. 方便客服经理为你提供更适合你的服务；
              </dd>
              <dd>
                2. 完善成功获得400积分（积分可在PCBgogo礼品商店兑换商品）
              </dd>
            </dl>
            <div class="enemy-des">
              PCBGOGO will not share, release,
              publish, disclose, rent, or sell any personally identifiable information to any third parties.
            </div>
          </div>
          <div class="enemy-r">
            <dl class="enemy-nav js-enemy-nav">
              <dd class="active">
                <div class="nav-info">
                  <span class="iconfont icon-gongsi"></span>
                  <span class="">
                                 Company
                            </span>
                </div>
              </dd>
              <dd>
                <div class="nav-info">
                  <span class="iconfont icon-gerenziliao"></span>
                  <span class="">
                                Individual
                            </span>
                </div>
              </dd>
              <dd>
                <div class="nav-info">
                  <span class="iconfont icon-hezuo1"></span>
                  <span class="">
                                Distributor
                            </span>
                </div>
              </dd>
            </dl>
            <div class="enemy-item">
              <div class="enemy-item-label">
                Country/Region.
              </div>
              <div class="quantity-select country-title js-country-title">
                <!-- 当前选中的...-->
                <div class="current-country js-current-country">
                  <!--                  <img src="../img/images/country.png" alt="">-->
                  <span class="js-country-name">

                                COMMONWEALTH
                                NO. MARIANA ISLANDS
                            </span>
                </div>
                <!-- 所有国家-->
                <div class="total-country js-total-country" style="display: none;">
                  <div class="country-search">
                    <input type="text" class="get-country" placeholder="Please enter country">
                  </div>

                  <div class="country-item ">
                    <span class="national flagbg-1"></span> AUSTRALIA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-2"></span>
                    COMMONWEALTH
                    NO. MARIANA ISLANDS
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-3"></span> UNITED
                    STATES OF AMERICA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-4"></span>
                    AUSTRALIA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-5"></span>
                    CONGO, THE
                    DEMOCRATIC REPUBLIC OF
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-6"></span>
                    KOREA, THE
                    D.P.R OF (NORTH K.)
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-7"></span>
                    AUSTRALIA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-8"></span>
                    COMMONWEALTH
                    NO. MARIANA ISLANDS
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-9"></span>
                    UNITED
                    STATES OF AMERICA
                  </div>
                  <div class="country-item">
                    <span class="national flagbg-10"></span>
                    AUSTRALIA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-11"></span>
                    CONGO, THE
                    DEMOCRATIC REPUBLIC OF
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-12"></span>
                    KOREA, THE
                    D.P.R OF (NORTH K.)
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-13"></span>
                    AUSTRALIA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-14"></span>
                    COMMONWEALTH
                    NO. MARIANA ISLANDS
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-0"></span>
                    UNITED
                    STATES OF AMERICA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-0"></span>
                    AUSTRALIA
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-0"></span>
                    CONGO, THE
                    DEMOCRATIC REPUBLIC OF
                  </div>
                  <div class="country-item ">
                    <span class="national flagbg-108"></span>
                    KOREA, THE
                    D.P.R OF (NORTH K.)
                  </div>
                </div>
              </div>
            </div>
            <div class="enemy-item">
              <div class="enemy-item-label">
                选择服务
              </div>
              <div class="service-choose">
                <label>
                  <input id="pcb-ck" type="checkbox">
                  PCB
                </label>
                <label>
                  <input id="pcba-ck" type="checkbox">
                  PCBA
                </label>
                <label>
                  <input id="comp-ck" type="checkbox">
                  元器件采购
                </label>
              </div>
            </div>
            <hr class="hr">
            <div class="enemy-item">
              <div class="enemy-item-label">
                Your Name
              </div>
              <div class="form-item">
                <input type="text" placeholder="Fill in your full name">
              </div>
            </div>
            <div class="enemy-item skype-box">
              <div class="enemy-item-l">
                <div class="enemy-item-label">
                  WhatsApp
                </div>
                <div class="skype">
                  <span class="iconfont icon-WhatsApp"></span>
                  <input type="text" placeholder="Skype">
                </div>
              </div>
              <div class="enemy-item-r">
                <div class="enemy-item-label">
                  Skype
                </div>
                <div class="social">
                  <span class="iconfont icon-Skype"></span>
                  <input type="text" placeholder="WhatsApp">
                </div>
              </div>
            </div>
            <hr class="hr">
            <div class="enemy-item">
              <div class="enemy-item-l">
                <div class="enemy-item-label">
                  Position
                </div>
                <div class="quantity-select shipping-title js-shipping-title">
                  <!-- 当前选中的...-->
                  <div class="current-shipping js-current-shipping">FedEx-IP</div>
                  <div class="total-shipping js-total-shipping" style="display: none;">
                    <div class="item">
                      设计师
                    </div>
                    <div class="item">
                      采购
                    </div>
                    <div class="item">
                      工程师
                    </div>
                    <div class="item">
                      技术员
                    </div>
                    <div class="item">
                      普通员工
                    </div>
                    <div class="item">
                      其它
                    </div>
                  </div>
                </div>
              </div>
              <div class="enemy-item-r">
                <div class="enemy-item-label">
                  Application
                </div>
                <div class="quantity-select shipping-title js-shipping-title">
                  <!-- 当前选中的...-->
                  <div class="current-shipping js-current-shipping">Application industries</div>
                  <div class="total-shipping js-total-shipping" style="display: none;">
                    <div class="item">
                      Application industries
                    </div>
                    <div class="item">
                      Network & Computer
                    </div>
                    <div class="item">
                      Consumer electronics
                    </div>
                    <div class="item">
                      Telecommunications
                    </div>
                    <div class="item">
                      Aerospace
                    </div>
                    <div class="item">
                      Automotive electronics
                    </div>
                    <div class="item">
                      Blomedical
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="enemy-tool">
              <button type="button" class="skip js-skip-btn">
                Skip
              </button>
              <button type="button" class="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister',
  data () {
    return {
      registerForm: {
        email: '',
        pwd: '',
        confirmPwd: '',
        singleFlag: true
      },
      isService: false,
      loginForm: {
        email: '',
        pwd: ''
      },
      isKeep: false
    }
  },
  mounted () {
  },
  methods: {
    focusItemFn (e) {
      e.target.parentNode.classList.add('active')
    },
    blurItemFn (e) {
      e.target.parentNode.classList.remove('active')
    },
    async singletonNameFn () {
      const querySingle = await this.$https.get('/singleton', {
        params: {
          user: this.registerForm.email
        }
      })
      if (querySingle.data.code === '-1') {
        this.$message({
          type: 'error',
          message: querySingle.data.msg
        })
        this.registerForm.singleFlag = false
      } else {
        this.registerForm.singleFlag = true
      }
      console.log(this.registerForm.singleFlag)
    },
    async registerFn () {
      if (this.registerForm.email === '') {
        this.$message({
          type: 'warning',
          message: '邮箱不能为空'
        })
        return false
      } else if (!(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.registerForm.email))) {
        this.$message({
          type: 'warning',
          message: '请输入正确的邮箱'
        })
        return false
      }
      if (!this.registerForm.singleFlag) {
        this.$message({
          type: 'warning',
          message: '邮箱已存在，请更换新的邮箱'
        })
        return false
      }
      if (this.registerForm.pwd === '') {
        this.$message({
          type: 'warning',
          message: '密码不能为空'
        })
        return false
      } else if (this.registerForm.pwd !== this.registerForm.confirmPwd) {
        this.$message({
          type: 'warning',
          message: '2次输入的密码不一致，请重新输入'
        })
        return false
      }
      if (!this.isService) {
        this.$message({
          type: 'warning',
          message: '请先勾选该协议'
        })
        return false
      }
      try {
        const result = await this.$https.post('/register', this.registerForm)
        if (result.data.code === '200') {
          // // //query 传参 必须是path：路由地址跳转路径，url地址显示参数
          // await this.$router.push({
          //   path: '/verify_code',
          //   query: { registerEmail: this.registerForm.email }
          // })
          // //params 传参 必须是name：路由地址跳转路径，url地址不显示参数
          await this.$router.push({
            name: 'VerifyCode',
            params: { registerEmail: this.registerForm.email }
          })

          // this.$confirm('注册成功, 是否直接登录?', '注册/登录提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
          //   window.localStorage.setItem('token', result.data.token)
          //   this.$router.push('/')
          // }).catch(() => {
          //   this.registerForm.email = ''
          //   this.registerForm.pwd = ''
          //   this.registerForm.confirmPwd = ''
          //   console.log('cancel')
          // })
        } else {
          this.$message({
            type: 'error',
            message: '注册失败,请稍后重试...'
          })
        } // end if
      } catch (err) {
        console.log(err)
        this.$message({
          type: 'error',
          message: '未知异常,请稍后重试...'
        })
      }
    }, // end catch
    // 登录模块
    async signInFn () {
      if (this.loginForm.email === '' || !(/^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(this.loginForm.email))) {
        this.$message({
          type: 'error',
          message: '请输入正确的邮箱'
        })
        return false
      }
      if (this.loginForm.pwd === '') {
        this.$message({
          type: 'error',
          message: '密码不能为空'
        })
        return false
      }
      const result = await this.$https.post('/login', this.loginForm)
      if (result.data.code === '200') {
        this.$message({
          type: 'success',
          message: result.data.msg
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 830)
      } else {
        this.$message({
          type: 'error',
          message: result.data.msg
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "/src/assets/components/css-function";
@import "/src/assets/components/basic-color";
@import "/src/assets/components/go-color";
@import "/src/assets/css/register-login";

.check-error {
  color: @colorE02D2D;
  line-height: normal;
  .positionL(absolute, -20px, 0, 1);
}

</style>
