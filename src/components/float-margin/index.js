import React from 'react';
import './index.scss';

class FloatMargin extends React.Component {
    render() {
        return (
            <div className='float-margin'>
                <ul className='card-list'>
                    <li className='card'>故人西辞黄鹤楼</li>
                    <li className='card'>烟花三月下扬州</li>
                    <li className='card'>孤帆远影碧空尽</li>
                    <li className='card'>唯见长江天际流</li>
                </ul>
            </div>
        );
    }
}

export default FloatMargin;
