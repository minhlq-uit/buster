import {useState} from 'react'
import ArrowTop from '@mui/icons-material/ArrowUpward';
import "./scrolltop.scss"
function ScrollTop() {
    const [show, setShow] = useState(false)
    const toogleBtn = () => {
        const scrolled = document.documentElement.scrollTop
        if(scrolled > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    const scrollTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth',
        })
    }
    window.addEventListener('scroll', toogleBtn)
    return (
        <div 
            className={`${show ? 'visible' : 'hidden'} btn-scroll`}
            onClick={scrollTop}
        >
            <ArrowTop/>
        </div>
    )
}

export default ScrollTop;