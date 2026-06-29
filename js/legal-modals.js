// Legal modal popups (Terms of Use & Privacy Policy)
(function() {
  var LEGAL_CONTENT = {
    terms: {
      titleTr: 'Kullanım Koşulları',
      titleEn: 'Terms of Use',
      body: '<p class="legal-updated">Last updated on 09/06/2026</p>' +
        '<p>Thank you for visiting the DANFront website, created as part of the &ldquo;DANFront: An Environmental History of the Early-Modern Ottoman Military Frontier in the Middle and Lower Danube&rdquo; project, hosted at the University of Vienna, Austria, and funded by the Austrian Science Fund (FWF-&Ouml;sterreichischer Wissenschaftsfonds). By using this Website, you agree to the following Terms of Use. If you do not agree to these Terms of Use, please refrain from using this Website. The DANFront project reserves the right to occasionally amend these Terms of Use. The amended Terms of Use will be posted on the Website.</p>' +
        '<h3>Definitions</h3>' +
        '<p>The &ldquo;DANFront&rdquo; website (hereafter &ldquo;the Website&rdquo;) consists of software and information, specifically the front-end web pages and the material and information stored on our back-end servers and databases.</p>' +
        '<h3>Copyright</h3>' +
        '<p>The DANFront project is the exclusive owner of all copyrights (database rights, intellectual property, and industrial property rights, etc.) over all the elements of the Website, including its software. All such rights are reserved and protected by Austrian copyright law and international treaties. The Website includes many original elements in its selection of material and classification of its contents; therefore, it qualifies as an original work of authorship protected by copyright laws. Please note that the development and operation of this website entail funds kindly provided by FWF and operational resources provided by the University of Vienna, Department of Near Eastern Studies.</p>' +
        '<p>All access to information on the Website (including, but not limited to, digitized material, texts, photos, images, video, etc.) is permitted only for personal, educational, or research purposes. If you author any public text (e.g., an academic or research paper, an article, a blog post, etc.) or make any public announcement or presentation using information from this Website, you are required to cite this Website as your source. Please use the <a href="sources">Citation page</a> for instructions on how to properly cite this Website.</p>' +
        '<p>It is forbidden to copy, reproduce, republish, upload to other websites, transmit, upload to a server, distribute, perform for the public, modify, create derivative works, and, in general, to exploit in any way, either wholly or in part, any element of this Website unless you have been clearly given written permission to do so. In general, it is forbidden to use the Website for commercial purposes or for any other purpose not explicitly permitted by the DANFront project.</p>' +
        '<p>Extraction and/or reuse of the whole or any part of the contents of the Website is forbidden. Users of this Website must refrain from any act that conflicts with the normal use of this Website or that unreasonably interferes with the legitimate interests of the DANFront project.</p>' +
        '<p>The trademarks, logos, brands, trade names, and distinctive titles contained on the Website, whether registered or not, are owned by the DANFront project or by third-party business associates of the DANFront project and are protected under the law. Nothing herein shall be deemed to confer on the user a license to use the above trademarks and/or distinctive marks. Any reproduction or use of them is strictly forbidden.</p>' +
        '<h3>User-generated and User-submitted content</h3>' +
        '<p>The Website offers the means for any content to be submitted to the DANFront project (either by filling out the contact form or by sending an email). This content can be anything that can be transferred electronically (text, image, video, etc.) Any content that you submit to the Website must be your own original work and cannot contain, incorporate, or reference anything that is owned by any third party or entity or would require the consent of any third party or entity in any jurisdiction (this restriction includes the depiction of individuals or any personal identification). By sending the content, you declare and warrant that it is not illegal, offensive, or defamatory, and you explicitly grant to the DANFront project the irrevocable and unlimited permission to use the content and the right to upload the content to the Website without royalty, payment, or other compensation. If the sender wishes for proper attribution to appear on the Website, they should include the relevant information in the form or their e-mail. The sender should be aware that the content may appear or be posted to social media platforms by the DANFront project or users of the Website. The DANFront project reserves the right, in its discretion, to determine whether the content is usable and publishable on the Website. The DANFront project may publish, review, modify, or remove all or part of the content submitted at their discretion.</p>' +
        '<h3>Website access</h3>' +
        '<p>The DANFront project makes every effort to ensure that the Website is accessible 24 hours a day. However, the project shall not be liable if, for any reason, the Website is unavailable, the connection is interrupted, or the connection is faulty. The DANFront project does not guarantee that the Website will be secure. Please confirm that your electronic equipment is free of viruses and in excellent condition.</p>' +
        '<h3>Quality of information posted and limitation of liability</h3>' +
        '<p>The DANFront project will do everything in its power to ensure the quality of information disseminated through the Website. However, the Geography Department and SICF do not fully guarantee the accuracy, completeness, or reliability of the information due to the great volume and its particular characteristics. The Website provides its information on an &ldquo;as is&rdquo; basis; therefore, the DANFront project shall not be liable for any direct or indirect loss that may arise from information that is inaccurate, incomplete, or infringes third-party rights.</p>' +
        '<p>The DANFront project (including its employees/contractors who operate the Website) declines any and all liability for any loss (direct or indirect) that may arise as a result of your access, use, or inability to use the Website.</p>' +
        '<p>The DANFront project reserves the right, at its discretion:</p>' +
        '<ul><li>to make alterations to the Website and its contents from time to time, without prior notice, even if the access to the Website is temporarily interrupted, and</li>' +
        '<li>to disable access to the Website, either wholly or in part, and/or to remove any archive, element, or information contained within.</li></ul>' +
        '<p>The above limitations of liability apply to the fullest extent permitted by law.</p>' +
        '<h3>Prohibited uses of the Website</h3>' +
        '<p>All users must not use the Website in any manner that, at the discretion of the DANFront project, is improper and/or violates Austrian or EU laws.</p>' +
        '<p>Prohibited uses of the Website include, but are not limited to, the following:</p>' +
        '<ul><li>Acts which violate the copyright and industrial property rights of the DANFront project over the Website, their software, trademarks, logos, distinctive titles etc.</li>' +
        '<li>Acts which violate either the privacy right of a third party (such as the unauthorized disclosure of personal data) or other third-party rights.</li>' +
        '<li>Any unauthorized access or attack to the Website, such as introducing viruses or other malicious material to the DANFront project&rsquo;s servers or electronic systems.</li></ul>' +
        '<p>In case access to the Website is granted to subscribed or authorized users, the DANFront project reserves the right to cancel access to any user account at any time if they believe the user has breached the law and/or the present Terms of Use.</p>' +
        '<h3>External websites</h3>' +
        '<p>The Website contains links to external resources and third-party websites. The DANFront project does not have control over these websites and, therefore, is not responsible for the availability, content, advertisements, goods, services, or any other material contained on or available through external websites.</p>' +
        '<h3>Applicable law</h3>' +
        '<p>The Terms of Use, any amendment thereof, and the use of the Website are subject to Austrian law. Any claim arising out of the use of the Website shall be brought only before the Courts of Vienna, Austria.</p>'
    },
    privacy: {
      titleTr: 'Gizlilik Politikası',
      titleEn: 'Privacy Policy',
      body: '<p class="legal-updated">Last updated: 09/06/2026</p>' +
        '<h3>Definitions</h3>' +
        '<dl class="legal-definitions"><dt>DANFront</dt><dd>The &ldquo;DANFront: An Environmental History of the Early-Modern Ottoman Military Frontier in the Middle and Lower Danube&rdquo; project</dd>' +
        '<dt>GDPR</dt><dd>General Data Protection Regulation Act.</dd>' +
        '<dt>Data Controller</dt><dd>Data Controller means the natural or legal person who (either alone or jointly or in common with other persons) determines the purposes for which and the manner in which any personal information are, or are to be, processed.</dd>' +
        '<dt>Data Processor</dt><dd>Data Processor means any natural or legal person who processes the data on behalf of the Data Controller.</dd>' +
        '<dt>Data Subject</dt><dd>Data Subject is any living individual who is using our Service and is the subject of Personal Data.</dd></dl>' +
        '<h3>1. Principles for processing personal data</h3>' +
        '<p>Our principles for processing personal data are:</p>' +
        '<ul><li><strong>Fairness and lawfulness.</strong> When we process personal data, the individual rights of the Data Subjects must be protected. All personal data must be collected and processed in a legal and fair manner.</li>' +
        '<li><strong>Restricted to a specific purpose.</strong> The personal data of Data Subject must be processed only for specific purposes.</li>' +
        '<li><strong>Transparency.</strong> The Data Subject must be informed of how his/her data is being collected, processed and used.</li></ul>' +
        '<h3>2. What personal data we collect and process</h3>' +
        '<p>For registered users, DANFront collects several different types of personal data for various purposes. Personal Data may include, but is not limited to:</p>' +
        '<ul><li>Email address</li><li>First name and last name</li><li>Address, State, Province, ZIP/Postal code, City</li></ul>' +
        '<p>For unregistered users, we do not collect any personal data. For all users, we use:</p>' +
        '<ul><li>Web app cookies for web application settings and session management</li><li>Google Analytics to improve our services.</li></ul>' +
        '<p>Web app cookies are an integral part of the application. To prevent your data from being used by Google Analytics, you can use the Google Analytics opt-out browser add-on for the Google Analytics JavaScript (ga.js, analytics.js, dc.js). If you want to opt-out, download and install the add-on for your web browser. The Google Analytics opt-out add-on is designed to be compatible with Chrome, Internet Explorer 11, Safari, Firefox and Opera. In order to function, the opt-out add-on must be able to load and execute properly on your browser. For Internet Explorer, 3rd-party cookies must be enabled. <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Learn more about the opt-out and how to properly install the browser add-on here</a>.</p>' +
        '<h3>3. How we use the personal data</h3>' +
        '<p>DANFront uses the collected personal data for various purposes:</p>' +
        '<ul><li>To provide you with services</li><li>To notify you about changes to our services and/or products</li><li>To provide user support</li>' +
        '<li>To gather analysis or valuable information so that we can improve our services</li><li>To detect, prevent and address technical issues</li>' +
        '<li>To allow content entry and management</li><li>To enforce our legal rights</li><li>To detect potential breaches of the Terms of Use</li>' +
        '<li>To comply with any legal requirements to which we are subject</li></ul>' +
        '<h3>4. Legal basis for collecting and processing personal data</h3>' +
        '<p>The legal basis for DANFront&rsquo;s collection and use of the personal data described in this Data Protection Policy depends on the personal data we collect and the specific context in which we collect the information:</p>' +
        '<ul><li>DANFront needs to enter into a contract with you</li><li>You have given DANFront permission to do so</li>' +
        '<li>Processing your personal data is in DANFront&rsquo;s legitimate interests</li><li>DANFront needs to comply with the law</li></ul>' +
        '<h3>5. Retention of personal data</h3>' +
        '<p>DANFront will retain your personal information only for as long as is necessary for the purposes set out in this Data Protection Policy. DANFront will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>' +
        '<h3>6. Data protection rights</h3>' +
        '<p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what personal data we hold about you and if you want it to be removed from our systems, please contact us. In certain circumstances, you have the following data protection rights:</p>' +
        '<ul><li>The right to access, update, or delete the information we have on you</li><li>The right of rectification</li><li>The right to object</li>' +
        '<li>The right of restriction</li><li>The right to data portability</li><li>The right to withdraw consent</li></ul>' +
        '<h3>7. Queries</h3>' +
        '<p>If you have any questions regarding this Privacy Policy or any data collected under the Privacy Policy, you can contact DANFront at <a href="mailto:onur.inal@univie.ac.at">onur.inal@univie.ac.at</a>. Please note that you have a right to lodge a complaint with the Hellenic Data Protection Authority at <a href="http://www.dpa.gr" target="_blank" rel="noopener noreferrer">http://www.dpa.gr</a>.</p>' +
        '<h3>8. Changes to our privacy policy</h3>' +
        '<p>We may occasionally amend this Privacy Policy to account for changes to our services and the way we handle your personal information. Therefore, we suggest that you frequently visit this Privacy Policy.</p>'
    }
  };

  function getLang() {
    return localStorage.getItem('siteLanguage') || localStorage.getItem('language') || 'tr';
  }

  function createModal() {
    var overlay = document.createElement('div');
    overlay.className = 'legal-modal-overlay';
    overlay.id = 'legal-modal-overlay';
    overlay.setAttribute('hidden', '');
    overlay.innerHTML =
      '<div class="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">' +
        '<div class="legal-modal-header">' +
          '<h2 id="legal-modal-title"></h2>' +
          '<button type="button" class="legal-modal-close" aria-label="Close">&times;</button>' +
        '</div>' +
        '<div class="legal-modal-body"></div>' +
      '</div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  function openModal(id) {
    var content = LEGAL_CONTENT[id];
    if (!content) return;

    var overlay = document.getElementById('legal-modal-overlay') || createModal();
    var lang = getLang();
    overlay.querySelector('#legal-modal-title').textContent = lang === 'tr' ? content.titleTr : content.titleEn;
    overlay.querySelector('.legal-modal-body').innerHTML = content.body;
    overlay.removeAttribute('hidden');
    document.body.classList.add('legal-modal-open');
    overlay.querySelector('.legal-modal-close').focus();
  }

  function closeModal() {
    var overlay = document.getElementById('legal-modal-overlay');
    if (!overlay) return;
    overlay.setAttribute('hidden', '');
    document.body.classList.remove('legal-modal-open');
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
      var trigger = e.target.closest('.legal-modal-trigger');
      if (trigger) {
        e.preventDefault();
        openModal(trigger.getAttribute('data-legal-modal'));
        return;
      }
      if (e.target.classList.contains('legal-modal-overlay') || e.target.closest('.legal-modal-close')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
