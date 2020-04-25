import React from 'react';
import './index.scss';

class WindowSize extends React.Component {

    constructor() {
        super();
        this.state = {
            client_h: 0,
            client_w: 0,
            offset_h: 0,
            offset_w: 0,
            scroll_h: 0,
            scroll_Top: 0
        }
    }

    render() {
        const {
            client_h,
            client_w,
            offset_h,
            offset_w,
            scroll_h,
            scroll_w,
            scroll_Top
        } = this.state;
        return (
            <div className='window-size'>
                <div className='box' id="box">
                    <p>client_w = content_w + padding_left + padding_right = { client_w }</p>
                    <p>offset_w = content_w + padding_left + padding_right + border_width * 2 = { offset_w }</p>
                    
                    <p>client_h = content_h + padding_top + padding_bottom = { client_h }</p>
                    <p>offset_h = content_h + padding_top + padding_bottom + border_width * 2 = { offset_h }</p>
                    
                    <p>scroll_Top: { scroll_Top }</p>

                    {/* 搞不懂scroll_h和scroll_w的具体含义 */}
                    <p>scroll_h: { scroll_h }</p>
                    <p>scroll_w: { scroll_w }</p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const parent = document.getElementById('box');
        
        // 浏览器窗口可视区域大小（不包括工具栏和滚动条等边线）
        let client_w = parent.clientWidth;
        let client_h = parent.clientHeight;

        // 网页内容实际宽高 (不包括工具栏和滚动条等边线）
        let offset_w = parent.offsetWidth;
        let offset_h = parent.offsetHeight;

        // 滚动的高度
        let scroll_Top = parent.scrollTop;

        // 网页内容实际宽高（包括工具栏和滚动条等边线）
        let scroll_w = parent.scrollWidth;
        let scroll_h = parent.scrollHeight;

        this.setState({
            client_h: client_h,
            client_w: client_w,
            offset_h: offset_h,
            offset_w: offset_w,
            scroll_h: scroll_h,
            scroll_w: scroll_w,
            scroll_Top: scroll_Top
        });
    }
}

export default WindowSize;
