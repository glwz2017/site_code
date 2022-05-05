<template>
  <div>
    <div id="video">
      <div class="mask"></div>
      <div class="hide-mask"></div>
      <video playsinline="" autoplay="" muted="" loop="">
        <source src="img/images/logo.mp4" type="video/mp4">
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
      <div class="login-box verify-module">
        <div class="title-name">Register / Sign In</div>
        <div class="verify-title">
          VALIDATION EMAIL
        </div>
        <dl class="verify-process">
          <dd>
            <div class="verify-icon">
              <span class="iconfont icon-checkcircleyuangou"></span>
            </div>
            <div class="verify-info">
              <div class="">
                STEP 1
              </div>
              <div class="">
                Fill in registration
                information
              </div>
            </div>
          </dd>
          <dd class="active">
            <div class="verify-icon">
              <span class="iconfont icon-checkcircleyuangou"></span>
            </div>
            <div class="verify-info">
              <div class="">
                STEP 2
              </div>
              <div class="">
                Validation
                <br>Email
              </div>
            </div>
          </dd>
          <dd>
            <div class="verify-icon">
              <span class="iconfont icon-checkcircleyuangou"></span>
            </div>
            <div class="verify-info">
              <div class="">
                STEP 3
              </div>
              <div class="">
                Registered
                Successfully
              </div>
            </div>
          </dd>
          <dd>
            <div class="verify-icon">
              <span class="iconfont icon-checkcircleyuangou"></span>
            </div>
            <div class="verify-info">
              <div class="">
                STEP 4
              </div>
              <div class="">
                Perfect
                Information
              </div>
            </div>
            <img class="reg-gift" src="../assets/images/reg-gift.svg" alt="" width="40" height="30">
          </dd>
        </dl>
        <div class="verify-body">
          <div class="verify-tips">
            Verify your email address
          </div>
          <div class="verify-note">
            Enter the verification code that we sent to
          </div>
          <div class="verify-user-email">
            {{ registerEmail }}
          </div>
          <div class="verify-des-text">
            if you don't see it, check your spam folder.
            <br>Please enter your verification code within 30 minutes.
          </div>
          <div class="form-item">
            <input class="js-get-code" type="text" placeholder="Enter Code">
          </div>
          <div class="form-tool">
            <a class="back-btn" href="javascript:void(0)">Back</a>
            <button class="registration-btn js-verify-code" type="button">
              <span class="reg-text">Register</span>
              <span class="iconfont icon-arrowrightyoujiantou"></span>
            </button>
          </div>
          <div class="relation-link">
            如果你仍未由到以上邮件，你可与我们联系：
            <a class="mail-to" href="mailto:service@pcbgogo.com">service@pcbgogo.com</a>
          </div>
        </div>
      </div>
      <p class="bottom-p">Copyright © 2015 PCBGOGO. All rights reserved. Shenzhen JDB Technology Co., Ltd.Address: No.
        15,
        Zhongxing Road, Kengzi Street, Pingshan District, Shenzhen, 518000, China</p>
    </div>

    <!--验证信息弹窗-->
    <div class="go-window-pop js-verify-pop">
      <div class="go-window-body">
        <div class="verify-pop">
          <div class="verify-title">Verification failed!</div>
          <dl class="verify-rules">
            <dt>
              There may be two reasons as follows:
            </dt>
            <dd>
              1. Verification code timeout.
            </dd>
            <dd>
              2. Your verification code is failed.
            </dd>
          </dl>
          <div class="form-tool">
            <button class="tryAgain-btn js-tryAgain-btn" type="button">
              Try again
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
                  <img src="src/assets/images/country.png" alt="">
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
                <label for="pcb-ck">
                  <input id="pcb-ck" type="checkbox">
                  PCB
                </label>
                <label for="pcba-ck">
                  <input id="pcba-ck" type="checkbox">
                  PCBA
                </label>
                <label for="comp-ck">
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
              <button type="button" class="submit js-enemy-btn">
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
  name: 'VerifyCode',
  data () {
    return {
      registerEmail: ''
    }
  },
  mounted () {
    this.registerEmail = this.$route.query.registerEmail
    console.log(this.$route)
    // this.registerEmail = this.$route.params.registerEmail
  }
}
</script>

<style scoped lang="less">
@import "/src/assets/components/css-function";
@import "/src/assets/components/basic-color";
@import "/src/assets/components/go-color";
@import "/src/assets/css/public";
@import "/src/assets/css/register-login";
</style>
