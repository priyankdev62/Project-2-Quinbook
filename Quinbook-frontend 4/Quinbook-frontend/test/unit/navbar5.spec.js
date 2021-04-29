import { shallowMount } from '@vue/test-utils'
import navbar5 from '@/components/navbar5.vue'
import {config} from '@vue/test-utils'
import axios from 'axios'
config.showDeprecationWarnings = false
describe('navbar5.vue',() => {
  const logOutMockFn = jest.fn()
  it('Navbar component is rendered', () => {
    const wrapper = shallowMount(navbar5)
    // check if navbar is rendered
    expect(wrapper.find('.navbar')).toBeTruthy()
  })
    
  it('Logo image is rendered', () => {
    const wrapper = shallowMount(navbar5)
    expect(wrapper.find('img[id="logo"]').exists()).toBe(true)
  })
  it('Own feed image is rendered', () => {
    const wrapper = shallowMount(navbar5)
    expect(wrapper.find('img[id="ownFeed"]').exists()).toBe(true)
  })
  it('Clicking on logout icon should call logoutUser method', async () => {
    const wrapper = shallowMount(navbar5, {
    methods: { logoutUser: logOutMockFn }
    })
    await wrapper.find('#logout').trigger('click')
    expect(logOutMockFn).toHaveBeenCalled()
    })
  it('axios logout',()=>{
      const wrapper = shallowMount(navbar5)
      expect(wrapper.vm.logoutUser(axios)).toBe()
  })

  // const mockFn = jest.fn()
  // const $router={
  //   push : mockFn
  // }
  // const $route ={
  //   path : '/'
  // }
  // it('axios logout',()=>{
  //   const wrapper = shallowMount(navbar5, {mock : $router, $route})
  //   wrapper.find('#logout').trigger('click')
  //   expect($router.push).toHaveBeenCalledWith($route.path)
  // })

  // const obj = {
  //   sessionId: localStorage.getItem('sessionId')
  // }
  // const mockFn = jest.fn("http://10.177.68.58:8090/logout",obj)
  // mockFn.mockReturnValue('res')
  // const axios ={
  //   post: mockFn
  // }
  // it('checking axios get', ()=>{
  //   const wrapper = shallowMount(navbar5, {mock: obj})
  //   wrapper.vm.logoutUser(axios)
  //   expect(axios.post).toBeCalledWith(obj.sessionId)
  // })

})