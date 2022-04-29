import chai from 'chai'
import { formatFruitForClient } from '@/modules/fruit/forClient/formatFruitForClient'

const { expect } = chai

describe('[[[ APPS/SERVER ]]]', function () {
  describe('formatFruitForClient', function () {
    it('should return what is expected', function () {
      const fruitResult = formatFruitForClient({
        id: 3,
        name: 'kiwi',
        color: 'green',
      })
      expect(fruitResult).to.eql({
        name: 'kiwi',
        color: 'green',
      })
    })
  })
})
