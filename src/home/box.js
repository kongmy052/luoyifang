const Box = (props) => {
    const { titleFontFamily, image, title, isPrice, bottomText } = props;
    return (
        <div className="box">
            <span>{title}</span>
            <hr />
            <img src="../test.jpg"/>
        </div>
    )
}
export default Box;