import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import likeDislike from '@/components/like-dislike.vue'
import {config} from '@vue/test-utils'
config.showDeprecationWarnings = false
describe('like-dislike.vue',() => {
  it('Like-dislike component is rendered', () => {
    const wrapper = shallowMount(likeDislike)
    expect(wrapper.find('.main')).toBeTruthy()
  })
  it('IF - Clicking on like image should call toggle function and display is set to false', async () => {
      const wrapper = shallowMount(likeDislike,{data(){
        return {
          display:true
        }
      }}) 
      function toggle() {
        wrapper.setData({display: !display})
      }
      await wrapper.find("#like").trigger('click')
      expect(wrapper.find("#like").exists()).toBeFalsy()
    })
    it('ELSE - Clicking on like image should call toggle function and display is not set to false', async () => {
      const wrapper = shallowMount(likeDislike,{data(){
        return {
          display:false
        }
      }}) 
      function toggle() {
        wrapper.setData({display: !display})
      }
      await wrapper.find("#liked").trigger('click')
      expect(wrapper.find("#liked").exists()).toBeFalsy()
    })
    it('comment',()=>{
      const wrapper = shallowMount(likeDislike)
      expect(wrapper.vm.comment()).toBe()
  })
})