function Card (props) { 
const {tityleText,descTitle} = props;
    const heading = "This is Heading"
    return (
      <>
        <div className='headingStyle'>
              <h1>{heading}</h1>
              <p className='headBody'>{tityleText}</p>
              <h3 className='footer'>{descTitle}</h3>
        </div>
      </>
    )
}
export default Card