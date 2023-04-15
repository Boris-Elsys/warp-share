import React from 'react';
import './download.css';

const fileurls = ["https://i.kym-cdn.com/entries/icons/original/000/022/216/Cursed_Image_banner.jpg", "https://i.kym-cdn.com/entries/icons/original/000/022/216/Cursed_Image_banner.jpg"];

class FileDownload extends React.Component {
	constructor(props) {
		super(props);
	}
	
	downloadEmployeeData = (url) => {
		fetch(url)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
					a.href = url;
          let name = url.split('/').pop();
					a.download = name;
					a.click();
				});
				//window.location.href = response.url;
		});
	}

  getButtons = () => {
    const result = fileurls.map((url) =>
    <div class="container">
				<h1>Download File using React App</h1>
				<h3>Download Employee Data using Button</h3>
				<button onDoubleClick={() => this.downloadEmployeeData(url)}>Download</button>
        <p />
    </div>
  );
  return (
    <div>{result}</div>
  );
  }
	
	render() {
		return (
      <this.getButtons />
			
		)
	}

}

export default FileDownload;