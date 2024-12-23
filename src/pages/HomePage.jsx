import myImage from '../assets/myImage.png'

const HomePage = () => {
    return (
        <div className='content'>
            <img src={myImage} alt="" />
            <h1>Lion</h1>
        </div>
    )
}

export default HomePage