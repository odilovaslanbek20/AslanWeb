import React, { useEffect, useRef } from 'react'

const VantaClouds = () => {
	const vantaRef = useRef(null)
	const vantaEffect = useRef(null)

	useEffect(() => {
		if (window.VANTA && window.VANTA.CLOUDS2 && !vantaEffect.current) {
			vantaEffect.current = window.VANTA.CLOUDS2({
				el: vantaRef.current,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
			})
		}

		return () => {
			if (vantaEffect.current) {
				vantaEffect.current.destroy()
				vantaEffect.current = null
			}
		}
	}, [])

	return (
		<div
			ref={vantaRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '850px',
				zIndex: -9999,
			}}
		/>
	)
}

export default VantaClouds
