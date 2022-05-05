<template>
  <div class="header">
    <!--顶部-->
    <div class="nav-info">
      <ul class="nav-items">
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont icon-qushuchakanshuxing2"></span>
            <span class="gerber">Online Gerber Viewer</span>
          </a>
        </li>
        <li>
          <a href="phone-display.html">
            <span class="iconfont icon-shouji1"></span>
            <span class="gerber">Mobile Website</span>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <span class="iconfont icon-Skype"></span>
          </a>
          <div class="skype-box">
            <div class="skype-link active">
              <a href="skype:live:service_7440?chat">
                Skype PC
              </a>
            </div>
            <div class="skype-link">
              <a href="https://web.skype.com/" target="_blank">
                Skype WEB
              </a>
            </div>
          </div>
        </li>
        <li><a href="mailto:service@pcbgogo.com">
          <span class="iconfont icon-iconfontcolor06"></span>
          <span class="mail-text">service@pcbgogo.com</span>
        </a>
        </li>
        <li class="language">
          <img class="country-tag" src="./England.png" width="16" height="16" alt="country-flag">
          English
          <!--语言选择弹出层-->
          <ul class="language-box">
            <li onclick="window.open('index.html','_self')">
              <img class="country-tag" src="./England.png" alt="" width="16" height="16">English
            </li>
            <li onclick="window.open('https://www.pcbgogo.jp/','_blank')">
              <img class="country-tag" src="./Japan.png" alt="" width="16" height="16">Japanese
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="top-box">
      <!--左侧logo-->
      <h1 class="logo">
        <a href="index.html">
          PCBgogo
        </a>
      </h1>
      <!--nav-tips-->
      <img src="./logo-tips.jpg" alt="logo tips" width="340" height="34" class="nav-tips">
      <!--日文-->
      <!--<img src="img/images/logo-tips_jp.jpg" alt="logo tips" width="336" height="34" class="nav-tips-jp">-->
      <!--nav-tips-->
      <!--右侧登录-->
      <div class="sign-box">
        <div class="sign-lists">
          <div class="sign-in" :style="{display: [isLogin?'':'block']}">
            <router-link to="/login_register">Sign in</router-link>
          </div>
          <div class="join" :style="{display: [isLogin?'':'block']}">
            <router-link to="/login_register">Join Free</router-link>
          </div>
          <div class="joined" :style="{display: [!isLogin?'':'block']}">
            <i><img src="./user.png" alt=""></i>
          </div>
          <div class="hi-in" :style="{display: [!isLogin?'':'block']}">
            <a href="javascript:void(0)">Hi! zhang测大街上公开了坚朗</a>
          </div>
          <!--信息列表-->
          <div class="person-info">
            <!--  未登录-->
            <div class="info">
              <div class="left-info">
                <div class="tips">
                  New Customer?
                </div>
                <router-link to="/login_register" class="join-free">Join Free</router-link>
              </div>
              <div class="right-info">
                <router-link to="/login_register" class="login-in">Sign in</router-link>
              </div>
            </div>
            <!--   已登录 -->
            <div class="info" style="display: none">
              <div class="left-info">
                <div class="tips">
                  Email: <span>20**@163.com</span>
                </div>
                <a class="out-btn" href="javascript:void(0)">
                  Sign Out
                </a>
              </div>
            </div>

            <div class="link-lists">
              <!-- 有数量添加   active 类名-->
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">My Account</span>
                </a>
              </div>
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">My Orders list</span>
                </a>
              </div>
              <div class="item active">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">Account Balance</span>
                </a>
              </div>
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">Discount coupon</span>
                </a>
              </div>
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">Reward points</span>
                </a>
              </div>
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">My Delivery Address</span>
                </a>
              </div>
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">My Forum</span>
                </a>
              </div>
              <div class="item">
                <a href="javascript:void(0)">
                  <span> •  </span>
                  <span class="name">Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--  购物车-->
        <div class="shopping-car">
          <!-- 有数量添加 active 或者你元素控制显示与隐藏-->
          <a href="javascript:void(0)" class="active">
            <span class="iconfont icon-gouwuche1"></span>
            <div class="of-cars">28</div>
          </a>
        </div>
        <!-- 广告-->
        <div class="ads-tips" :style="{display: [isLogin?'':'block']}">
          New here ? Getting <span>$50</span> coupon
        </div>
      </div>
    </div>
    <!--导航-->
    <div class="nav">
      <div class="nav-box ">
        <!--左侧列表-->
        <ul class="nav-lists js-nav-lists">
          <li class="active"><a href="/" class="home">Home</a></li>
          <li tab="1">
            <a href="/pcb-fabrication-quote.html">PCB Instant Quote</a>
            <div class="child-parent">
              <div class="child-menu">
                <div class="item">
                  <a class="title" href="/pcb-fabrication-quote.html">
                    <span> PCB Manufacturing Calculator </span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="/pcba-quote.html">
                    <span> PCB Assembly Calculator </span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="/flexible-pcb-quote.aspx">
                    <span> Flexible PCB/Rigid-Flex PCB Calculator</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="/pcb-stencil-quote.aspx">
                    <span> SMD Stencil Calculator </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="assembly-menus">
            <a href="/pcb-assembly.html">PCB Assembly </a>
            <div class="child-parent">
              <div class="child-menu">

                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/Capabilities/PCBA_Capabilities.html">
                    <span>PCBA Capabilities</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/Capabilities/Files_Requested_for_PCBA.html">
                    <span>Files Requested for PCBA</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/Capabilities/PCBA_Special_reminders.html">
                    <span>PCBA Special Reminders</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/Capabilities/SMT_stencil_and_Laser_Stencil.html">
                    <span>SMD Stencil</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/knowledge-center/BGA_Assembly_Capabilities.html">
                    <span>BGA Assembly Capabilities</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/knowledge-center/Panel_Requirements_for_PCB_Assembly.html">
                    <span>Panel Requirements for PCBA </span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/knowledge-center/Components_sourcing.html">
                    <span>Components sourcing</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.com/Capabilities/Fast_Turnkey_PCB_Assembly.html">
                    <span>Fast Turnkey PCBA</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/Capabilities/PCB_Assembly_process.html">
                    <span>PCBA Process</span>
                  </a>
                </div>

                <!-- 日文部分 套用注意-->
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.jp/Capabilities/PCB_Assembly_Capabilities.html">
                    <span>部品実装基準</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.jp/pcb-assembly/Files_Requested_for_PCBA.html">
                    <span>入稿データ一覧</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.jp/knowledge-center/smt_pcb.html">
                    <span>表面実装の能力</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.jp/knowledge-center/BGA_assembly_capabilities.html">
                    <span>BGAの実装能力</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.jp/knowledge-center/components_sourcing.html">
                    <span>部品調達</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.jp/knowledge-center/mixde_assembly.html">
                    <span>混合実装</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title"
                     href="https://www.pcbgogo.jp/knowledge-center/through_hole_assembly.html">
                    <span>スルーホール実装</span>
                  </a>
                </div>
                <!-- 日文部分 套用注意-->
              </div>
            </div>
          </li>
          <li>
            <a href="/hdi-pcb.html">Advanced PCB</a>
          </li>

          <li tab="2" class="capabilities-menus">
            <a href="/Capabilities/FR_4_PCB_Manufacturing.html"> Capabilities </a>

            <div class="child-parent">
              <div class="child-menu">

                <div class="item">

                  <a class="title" href="/Capabilities/FR_4_PCB_Manufacturing.html">
                    <span>Printed Circuit Boards</span>
                  </a>

                  <div class="son-box">
                    <div class="child-link">

                      <div class="list">
                        <a href="/Capabilities/FR_4_PCB_Manufacturing.html">
                          <span class="name">Standard PCB Capabilities</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/Advanced_High_quality_PCB_Manufacturing_Capabilities.html">
                          <span class="name">Advanced PCB Manufacturing</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/Printed_Circuit_Board_Prototype.html">
                          <span class="name">Printed Circuit Board Prototype</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/PCB_Capabilities_PCB_Layout.html">
                          <span class="name">PCB Capabilities &amp; PCB Layout</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="javascript:void(0)">
                          <span class="name">Aluminum PCB</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="javascript:void(0)">
                          <span class="name">Rigid-Flex PCBs</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="item">

                  <a class="title" href="/Capabilities/PCBA_Capabilties.html">
                    <span>PCB Assembly</span>
                  </a>

                  <div class="son-box">
                    <div class="child-link">

                      <div class="list">
                        <a href="/Capabilities/PCBA_Capabilties.html">
                          <span class="name">PCBA Capabilities</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/PCB_Assembly_process.html">
                          <span class="name">PCB Assembly process</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/PCBA_Special_reminders.html">
                          <span class="name"> PCBA Special reminders</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/Fast_Turnkey_PCB_Assembly.html">
                          <span class="name">Fast Turnkey PCB Assembly</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/Capabilities/Files_Requested_for_PCBA.html">
                          <span class="name">Files Requested for PCBA</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="item">

                  <a class="title" href="/Capabilities/qwr.html">
                    <span>SMD Stencil</span>
                  </a>

                  <div class="son-box">
                    <div class="child-link">

                      <div class="list">
                        <a href="/Capabilities/SMT_stencil_and_Laser_Stencil.html">
                          <span class="name">SMT stencil and Laser Stencil</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="item">

                  <a class="title" href="/Capabilities/PCB_Design_and_Layout.html">
                    <span>PCB Design-Aid &amp; Layout</span>
                  </a>

                  <div class="son-box">
                    <div class="child-link">

                      <div class="list">
                        <a href="/Capabilities/PCB_Design_and_Layout.html">
                          <span class="name">PCB Design and Layout</span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </li>
          <li class="capabilities-menus">
            <a href="/knowledge-center/Printed_Circuit_Board_Prototype.html">Knowledge Center</a>
            <div class="child-parent">
              <div class="child-menu">
                <div class="item">

                  <a class="title" href="/knowledge-center/communicate_and_work.html">
                    <span>使用指南</span>
                  </a>
                  <div class="son-box">
                    <div class="child-link">
                      <div class="list">
                        <a href="/knowledge-center/communicate_and_work.html">
                          <span class="name">下单</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="/knowledge-center/On_half_of_the_Payment_instructions.html">
                          <span class="name">下单</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">

                  <a class="title" href="javascript:void(0)">
                    <span>bbbb</span>
                  </a>
                  <div class="son-box">
                    <div class="child-link">
                      <div class="list">
                        <a href="javascript:void(0)">
                          <span class="name">bbbb1</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">

                  <a class="title" href="javascript:void(0)">
                    <span>cccc</span>
                  </a>
                  <div class="son-box">
                    <div class="child-link">
                      <div class="list">
                        <a href="javascript:void(0)">
                          <span class="name">cccc1</span>
                        </a>
                      </div>
                      <div class="list">
                        <a href="javascript:void(0)">
                          <span class="name">cccc2</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/Feedback/">Feedback</a>
            <div class="child-parent">
              <div class="child-menu">
                <div class="item">
                  <a class="title" href="/current-events/">
                    <span> Current Events</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <!--后续添加-->
          <li tab="3">
            <a href="https://www.pcbgogo.com/about-us.html">About Us</a>
            <div class="child-parent">
              <div class="child-menu">
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/why.html/">
                    <span>Why choose us？</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/orderguide.html">
                    <span>Order Guide</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/quality_gurrantee.html">
                    <span>Quality guarantee</span>
                  </a>
                </div>

                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/PaymentMethod.html">
                    <span>Method of Payment</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/shipping_method_guide.html">
                    <span>Shipping methods guide</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/current-events/">
                    <span>News</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="https://www.pcbgogo.com/privacy_policy.html">
                    <span>Privacy Policy</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="/shipping_method_guide.html">
                    <span>  Shipping method guide</span>
                  </a>
                </div>
                <div class="item">
                  <a class="title" href="/Terms of Service.html">
                    <span> Terms of Service</span>
                  </a>
                </div>

                <!--   pcbgogo delivery 暂时隐藏 该元素保留  -->
                <div class="item" style="display: none">
                  <a class="title" href="http://www.pcbgogo.com/delivery.html">
                    <span>PCBgogo delivery</span>
                  </a>
                </div>
              </div>

            </div>
          </li>
          <li>
            <a href="/help_center.html">Help Center</a>
          </li>
          <li>
            <a href="/contact-us.html">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    isLogin: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="less">
@import "/src/assets/components/header";
</style>
