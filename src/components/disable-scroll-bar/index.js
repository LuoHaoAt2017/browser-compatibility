import React from 'react';
import { Modal, Button } from 'antd';
import './index.scss';

class DisableScrollBar extends React.Component {
    state = { 
        visible: false,
        bodyStyle: {
            fontSize: '20px',
            fontWeight: 'lighter'
        }
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className='disable-scroll-bar'>
                <Button type="primary" onClick={this.showModal} className='modal-switcher'>
                    Open Modal
                </Button>
                <ul className='card-list'>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                    <li className='card'>
                        <p className='poetry'>
                            <label className='title'>
                                黄鹤楼送孟浩然之广陵
                    </label>
                            <span className='line'>故人西辞黄鹤楼</span>
                            <span className='line'>烟花三月下扬州</span>
                            <span className='line'>孤帆远影碧空尽</span>
                            <span className='line'>唯见长江天际流</span>
                        </p>
                    </li>
                </ul>
                <Modal
                    closable={false}
                    className='preferences-inner'
                    wrapClassName='preferences-outer'
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>孤帆远影碧空尽</p>
                    <p>唯见长江天际流</p>
                </Modal>
            </div>
        );
    }
}

export default DisableScrollBar;