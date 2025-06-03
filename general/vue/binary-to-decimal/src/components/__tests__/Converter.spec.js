import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Converter from '../Converter.vue'

describe('Converter.vue', () => {
  it('display title of converter', () => {
    const wrapper = shallowMount(Converter)
    const title = wrapper.find('h1')

    expect(title.text()).toContain('Binary')
  })

  it('swap order class', async () => {
    const wrapper = shallowMount(Converter)
    const panel = wrapper.find('div > div > div > div')
    const button = wrapper.find('button')

    expect(panel.classes()).toContain('order-1')

    await button.trigger('click')

    expect(panel.classes()).toContain('order-2')
  })

  it('check binary convertion', async () => {
    const wrapper = shallowMount(Converter)
    const input = wrapper.find('#binary')
    const output = wrapper.find('#decimal')

    await input.setValue('101')
    await input.trigger('keyup')

    expect(output.element.value).toBe('5')
  })

  it('check decimal convertion', async () => {
    const wrapper = shallowMount(Converter)
    const button = wrapper.find('button')
    const input = wrapper.find('#decimal')
    const output = wrapper.find('#binary')

    await button.trigger('click')
    await input.setValue('3')
    await input.trigger('keyup')

    expect(output.element.value).toBe('11')
  })

  it('check disable inputs', async () => {
    const wrapper = shallowMount(Converter)
    const button = wrapper.find('button')
    const input = wrapper.find('#binary')
    const output = wrapper.find('#decimal')

    expect(input.attributes().disabled).toBeUndefined()
    expect(output.attributes().disabled).toBeDefined()

    await button.trigger('click')

    expect(input.attributes().disabled).toBeDefined()
    expect(output.attributes().disabled).toBeUndefined()
  })
})
