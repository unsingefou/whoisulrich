class Submit extends React.Component {

  onSubmit() {
    $.ajax({
      type: "POST",
      url: 'https://script.google.com/macros/s/AKfycbwajEx9DG8t51_Btu06zRdmYZLXwnPsq4dvBmyzAPr-AU5SLxzu/exec',
      data: this.props.formData
    }).then(() => {
      console.log("done!")
    })
  }

  onChange(e) {
    e.preventDefault()
    this.props.onInputChange('predictor_name', e.target.value)
  }

  render(){
    return (
      <div className='trait predictor-name'>
        <img className='trait-icon' src='' />
        <p className='question'>Tell us your name, so we can tell you if you win!</p>
        <input name='predictor_name' autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
        <div onClick={this.onSubmit.bind(this)} className='next-wrapper'>
          <i className='fa fa-chevron-right fa-3x' ></i>
          <span>SUBMIT</span>
        </div>
      </div>
    )
  }
}

export default Submit
