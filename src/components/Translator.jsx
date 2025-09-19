// // import { useSelector } from 'react-redux';
// // import { useEffect } from 'react';
// //  import { allCountries } from 'country-telephone-data';

// // const Translator = () => {
// //   const language = useSelector((state) => state.language.language);
// // let iso2 = allCountries.map(c => c.iso2);
// // let iso2String = iso2.join(',');

// //   // // Load Google Translate script and initialize
// //   useEffect(() => {
// //     if (!window.googleTranslateElementInit) {
// //       window.googleTranslateElementInit = () => {
// //         new window.google.translate.TranslateElement(
// //           {
// //             pageLanguage: 'en',
// //             includedLanguages: 'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,kk,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu',
// //             autoDisplay: false,
// //           },
// //           'google_translate_element'
// //         );
// //       };

// //       const script = document.createElement('script');
// //       script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
// //       document.body.appendChild(script);
// //     }
// //   }, []);

// //   // Change language when Redux state changes
// //   useEffect(() => {
// //     const select = document.querySelector('.goog-te-combo');
// //     if (select && language) {
// //       select.value = language;
// //       select.dispatchEvent(new Event('change'));
// //           select.dispatchEvent(new Event('input', { bubbles: true }));

// //     }
// //   }, [language]);

// //   useEffect(() => {
// //   const interval = setInterval(() => {
// //     const banner = document.querySelector('.goog-te-banner-frame');
// //     if (banner) banner.remove();
// //   }, 500);

// //   return () => clearInterval(interval);
// // }, []);

// //   return <div id="google_translate_element" style={{ display: 'none' }} />;
// // };

// // export default Translator;
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { allCountries } from 'country-telephone-data';
// import './Traslator.scss'

// const Translator = () => {
//   // const language = useSelector((state) => state.language.language);
//   // let iso2 = allCountries.map(c => c.iso2);
//   // let iso2String = iso2.join(',');

//   // // Load Google Translate script
//   // useEffect(() => {
//   //   if (!window.googleTranslateElementInit) {
//   //     window.googleTranslateElementInit = () => {
//   //       new window.google.translate.TranslateElement(
//   //         {
//   //           pageLanguage: 'en',
//   //           includedLanguages: iso2String,
//   //           autoDisplay: false,
//   //         },
//   //         'google_translate_element'
//   //       );
//   //     };

//   //     const script = document.createElement('script');
//   //     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//   //     document.body.appendChild(script);
//   //   }
//   // }, [iso2String]);

//   // // Remove banner/popup iframe if it appears
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     const banner = document.querySelector('.goog-te-banner-frame');
//   //     if (banner) banner.remove();
//   //     document.body.style.top = '0px'; // prevent body shift
//   //   }, 500);

//   //   return () => clearInterval(interval);
//   // }, []);

//   // // Change language when Redux state changes
//   // useEffect(() => {
//   //   const select = document.querySelector('.goog-te-combo');
//   //   if (select && language) {
//   //     select.value = language;
//   //     select.dispatchEvent(new Event('change'));
//   //     select.dispatchEvent(new Event('input', { bubbles: true }));
//   //   }
//   // }, [language]);

//   // return <div id="google_translate_element" style={{ display: 'none' }} />;
//     const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         includedLanguages: 'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,kk,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu',
//         autoDisplay: false
//       },
//       "google_translate_element"
//     );
//   };
//   useEffect(() => {
//     //if (!IsLoaded) {
//       var addScript = document.createElement("script");
//       addScript.setAttribute(
//         "src",
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"

//       );
//       document.body.appendChild(addScript);
//       window.googleTranslateElementInit = googleTranslateElementInit;
//      // IsLoaded = true;
//     //}
//   }, []);
//    return (<div id="google_translate_element" style={{ display: 'none' }} />);

// };

// export default Translator;


import { useState,useEffect } from "react";

import './Traslator.scss'
const Translator = ({ className }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);
  let IsLoaded = false;
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: 'af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,kk,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,ug,uz,vi,cy,xh,yi,yo,zu',
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    if (!IsLoaded) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"

      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
      IsLoaded = true;
    }
  }, []);


  const toggleTranslator = () => {
    setShowTranslator(!showTranslator);
  };
  return (
    <>
    <div id="google_translate_element" className=""></div>
    {/* {showTranslator ? (
      <><div id="google_translate_element" className=""></div></>
    ):
    (
      <Button variant="primary" className="px-4" onClick={toggleTranslator}>
      Language
    </Button>
    )} */}
    
    
  </>
  );
};

export default Translator;
