class Submit extends React.Component {

  onSubmit() {
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '/predictions');
    // xhr.onload = function() {
    //     if (xhr.status === 200) {
    //         alert('User\'s name is ' + xhr.responseText);
    //     }
    //     else {
    //         alert('Request failed.  Returned status of ' + xhr.status);
    //     }
    // };
    // xhr.send(this.props.formData);

    $.ajax({
      type: "POST",
      url: '/predictions',
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
