
const tname = 'Componentttone'

const component1 = {
  template://html
  `
  <div class="box"> {{ itemx }} <p>{{ prop }}</p></div>
  `,
  props: ['prop'],
  data(){
    return {
      itemx: 'test'
    }
  },
}
export{
  tname,
  component1,
}