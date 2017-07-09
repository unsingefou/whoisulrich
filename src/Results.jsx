class Results extends React.Component {
  render(){
    let results = this.props.results.map((item, index) => {

      let hair_amount = 'none at all'
      if(item.hair_amount === 'little') {
        hair_amount = 'just a little'
      } else if (item.hair_amount === 'ton') {
        hair_amount = 'a ton of it'
      }

      return (
        <p key={index}>
          <span className='item predictor-name'>{item.predictor_name}</span> predicts that&nbsp;
          <span className='item name'>{item.name}</span> will be&nbsp;
          <span className='item height'>{item.height} inches</span> tall,&nbsp;
          <span className='item weight'>{item.weight_lbs}lbs</span>&nbsp;
          <span className='item weight'>{item.weight_oz}oz</span>, with&nbsp;
          <span className='item hair-color'>{item.hair_color} hair</span> (born with&nbsp;
          <span className='item hair-amount'>{hair_amount}</span>), and will have&nbsp;
          <span className='item eye-color'>{item.eye_color} eyes</span>.
        </p>
      )
    })

    return (
      <div className='results'>
        <h1>Thanks for playing along. We'll let you know if you win!</h1>
        {results}
      </div>
    )
  }
}

export default Results
