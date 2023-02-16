
import {tname,component1} from "./component.js"

function registComponents(app)
{
  app.component(tname, component1)
}

const MainCompunent = {
    data(){
      return {
        toggle:true,
        someData: 'passtoprop',
        items: [...Array(5).keys()].map((i) => {
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
    <div v-for="img in images" class="bbbox">
      <img :src="img.url" :alt="img.name">
    </div>
    <button @click="toggle=!toggle">clickme</button>
    <${tname} :class="toggle?'bbbox':''" :prop="someData"/>

    <!--
    <section v-for="item in items" :key="item.i">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </section>-->
    `
}

export {
  MainCompunent,
  registComponents,
}
