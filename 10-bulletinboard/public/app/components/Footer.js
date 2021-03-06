import React, { Component } from 'react'

class Footer extends Component {

	render(){
		return (
	        <footer>
	            <div id="copyrights">

	                <div className="container clearfix">

	                    <div className="col_half">
	                        Copyrights &copy; 2014 All Rights Reserved by Canvas Inc.<br />
	                        <div className="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
	                    </div>

	                    <div className="col_half col_last tright">
	                        <div className="fright clearfix">
	                            <a href="#" className="social-icon si-small si-borderless si-facebook">
	                                <i className="icon-facebook"></i>
	                                <i className="icon-facebook"></i>
	                            </a>

	                            <a href="#" className="social-icon si-small si-borderless si-twitter">
	                                <i className="icon-twitter"></i>
	                                <i className="icon-twitter"></i>
	                            </a>

	                            <a href="#" className="social-icon si-small si-borderless si-gplus">
	                                <i className="icon-gplus"></i>
	                                <i className="icon-gplus"></i>
	                            </a>

	                            <a href="#" className="social-icon si-small si-borderless si-github">
	                                <i className="icon-github"></i>
	                                <i className="icon-github"></i>
	                            </a>

	                            <a href="#" className="social-icon si-small si-borderless si-linkedin">
	                                <i className="icon-linkedin"></i>
	                                <i className="icon-linkedin"></i>
	                            </a>
	                        </div>

	                        <div className="clear"></div>

	                        <i className="icon-envelope2"></i> info@canvas.com <span className="middot">&middot;</span> <i className="icon-headphones"></i> +91-11-6541-6369 <span className="middot">&middot;</span> <i className="icon-skype2"></i> CanvasOnSkype
	                    </div>

	                </div>

	            </div>

	        </footer>	


		)

	}
}

export default Footer