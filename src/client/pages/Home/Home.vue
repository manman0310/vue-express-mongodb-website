<template>
  <div>
    <top></top>
    <div class="row">
      <div class="col-lg-3 col-md-3">
        <contact-us></contact-us>
        <left-list></left-list>
      </div>
      <div class="col-lg-9 col-md-9">
        <div class='content-div'>
          <div class="navbar-collapse collapse" id="navbar">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a aria-expanded="false" role="button" style="color:#58b495" v-on:mouseenter="addShake" v-on:mouseleave="removeShake" class="dropdown-toggle" data-toggle="dropdown">
                  <router-link to="/home/AboutUs"><strong> About us</strong></router-link>
                </a>
              </li>
              <li class="dropdown">
                <a aria-expanded="false" role="button" class="dropdown-toggle" data-toggle="dropdown"> New Products <span class="caret"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <a>
                      <router-link to="/home/Outdoor">Outdoor Digital Printers</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Indoor">Indoor Printers & Laminators</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Decoration">Decoration lighting & controllers</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a aria-expanded="false" role="button" class="dropdown-toggle" data-toggle="dropdown"> Advertisiment Products <span class="caret"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <a>
                      <router-link to="/home/materials">Advertising materials</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Routers">Routers</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Billboards">Prisma Billboards</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Exhibition">Exhibition products</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Printers">Banner Printers</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/plotters">Cutting plotters</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/LEmachines">Laser Engraving machines</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/AMmachines">Acrylic moulding machines</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a aria-expanded="false" role="button" class="dropdown-toggle" data-toggle="dropdown"> LED <span class="caret"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <a>
                      <router-link to="/home/Screens">LED Screens</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/boxes">Light boxes</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a aria-expanded="false" role="button" class="dropdown-toggle" data-toggle="dropdown"> Other Products   <span class="caret"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <a>
                      <router-link to="/home/Balloons">Balloons and inflatable</router-link>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a aria-expanded="false" role="button" class="dropdown-toggle" data-toggle="dropdown"> Artfacts <span class="caret"></span></a>
                <ul role="menu" class="dropdown-menu">
                  <li>
                    <a>
                      <router-link to="/home/Photo">Photo frame</router-link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <router-link to="/home/Magic">Magic frame</router-link>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="content-div" style="padding: 30px;margin-top:20px">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ContactUs from "../ContactUs/ContactUs"
  import LeftList from "./LeftList";
  import Top from "./Top";
  export default {
    name: "home",
    components: {
      ContactUs,
      LeftList,
      Top
    },
    methods: {
      addShake: function(event) {
        event.target.classList.add('animated')
        event.target.classList.add('swing')       
      },
      removeShake: function(event) {
        event.target.classList.remove('swing')
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-div {
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
    width: 95%;
    margin-right: 5%;
    background-color: white;
  }
  .nav>li>a {
    color: #5c5f63;
    font-size: 15px;
    padding: 14px 14px 14px 14px;
  }
</style>
