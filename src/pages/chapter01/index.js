import React from 'react';
import '@/assets/scss/chapter01.scss';
function App() {
	return (
		<div className='container'>
			在还原设计稿的时候我们常常会需要用到透明属性，所以解决 IE9 以下浏览器不能使用 opacity。
			<div className='opacity'>
				<div className='item origin'></div>
				<div className='item target'></div>
			</div>
		</div>
	)
}

export default App;