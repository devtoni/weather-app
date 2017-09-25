import React from 'react'
import { shallow } from 'enzyme'
import Api from '../service/weatherApi'
import toJson from 'enzyme-to-json'
import Forecast from '../components/Forecast/'
import Day from '../components/Day'

test('Forecast should render as expected', () => {
  const component = shallow(<Forecast />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('Forecast has a prop search as expected by default', () => {
  const component = shallow(<Forecast />)
  console.log(component.instance().props) // Barcelona
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})

test('when prop is passed by query, should render the expected result', () => {
  const component = shallow(<Forecast search='Barcelona' />)
  const {search} = component.instance().props
  const result = Api.getForecast(search)
  result.then((response) => {
    expect(component.find(Day).length).toEqual(response.data.list.length)
  })
})
