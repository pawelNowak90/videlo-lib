import React from 'react';

import './Footer.css';

import AuthorSignature from './AuthorSignature';
import FooterContent from './FooterContent';

const Footer = () => {
    return (
        <footer>
            <FooterContent/>
            <AuthorSignature/>
        </footer>
     );
}

export default Footer;