import React from 'react';
import './index.scss';

class DefaultMargin extends React.Component {
    render() {
        return (
            <div className='default-margin'>
                <h3 className='title'>黄鹤楼送孟浩然之广陵</h3>
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

export default DefaultMargin;
