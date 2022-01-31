import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ReactPackage } from '../index'

describe('ReactPackage', () => {
	it('should display the text correctly', () => {
		const { queryByText } = render(<ReactPackage />)
		expect(queryByText('My React Package 10')).toBeInTheDocument()
	})
})
