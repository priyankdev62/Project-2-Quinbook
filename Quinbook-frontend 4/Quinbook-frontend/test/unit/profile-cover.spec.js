import { shallowMount } from '@vue/test-utils'
import profileCover from '@/components/profile-cover.vue'
import {config} from '@vue/test-utils'
config.showDeprecationWarnings = false
describe('profile-cover.vue', ()=> {
    it('addpassed',()=>{
        const wrapper = shallowMount(profileCover)
        expect(wrapper.vm.addItem()).toBe()
    })
    const item = {
      completed: false,
      name:'adarsh'
    }
    it('togglepassed',()=>{
      const wrapper = shallowMount(profileCover, { mock: item })
      expect(wrapper.vm.toggleCompleted(item)).toBe()
  })
  it('removepassed',()=>{
        const wrapper = shallowMount(profileCover, {data(){
          return{
            newItem:''
          }
        }}, { mock: item })
        expect(wrapper.vm.removeItem(item)).toBe()
    })
    const $router = {
      push: jest.fn()
    }
})