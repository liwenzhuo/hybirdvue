
import {tname,component1} from "./component.js"

function registComponents(mainapp)
{
  mainapp.component('VueHorizontal',VueHorizontal)
  mainapp.component(tname, component1)
}

const MainCompunent = {
    data(){
      return {
        toggle:true,
        someData: 'passtoprop',
        items: [...Array(15).keys()].map((i) => {
          return {i, title: `v-for: ${i}`, content: `🚀 Paragraph ${i}`};
        }),
        images:[]
      }
    },
    methods:{
      makedata(dimages)
      {
        dimages.forEach(d =>{
          d['url'] = 'static/images/'+d['name']
          this.images.push(d)
        })
      }
    },
    mounted(){
      fetch('static/images/x.json')
      .then(res => {
        if (!res.ok) {
          let err = new Error(res.statusText)
          err.response = res
          throw err
        }
        const contentType = res.headers.get("content-type")
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json().then(data=>{
            this.makedata(data)
          })
        } else {
          return res.text().then(data=>{
            const dimages = JSON.parse(data)
              this.makedata(dimages)
          })
        }
      })
      .catch(err => console.log(err))
    },
    template://html
    `
    <button id="btnontop" @click="toggle=!toggle">abc</button>
    <div class="mainapp" :class="toggle?'showup':''">
      <div  class="hori" >
        <vue-horizontal responsive>
          <div v-for="img in images" class="bbbox">
            <img :src="img.url" :alt="img.name">
          </div>

          <${tname} :class="toggle?'bbbox':''" :prop="someData"/>

          <section class="bbbox" v-for="item in items" :key="item.i">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </section>
        </vue-horizontal>
      </div>
    </div>
    `
}

export {
  MainCompunent,
  registComponents,
}
