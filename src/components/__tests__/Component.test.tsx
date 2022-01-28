import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Component } from '../Component'

describe('Component', () => {
	it('should display the text correctly', () => {
		const { queryByText } = render(<Component />)
		expect(queryByText('This is my React Package')).toBeInTheDocument()
	})
})
