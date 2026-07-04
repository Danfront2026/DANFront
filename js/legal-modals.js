// Legal modal popups (Terms of Use & Privacy Policy)
(function() {
  var LEGAL_DISCLAIMER_TR =
    '<p class="legal-disclaimer"><em>Bu metnin İngilizce orijinali geçerli, uygulanabilir ve nihai kabul edilir.</em></p>';

  var LEGAL_CONTENT = {
    terms: {
      titleTr: 'Kullanım Koşulları',
      titleEn: 'Terms of Use',
      bodyEn: '<p class="legal-updated">Last updated on 09/06/2026</p>' +
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
        '<p>The Terms of Use, any amendment thereof, and the use of the Website are subject to Austrian law. Any claim arising out of the use of the Website shall be brought only before the Courts of Vienna, Austria.</p>',
      bodyTr: '<p class="legal-updated">Son g&uuml;ncelleme: 09/06/2026</p>' +
        '<p>Viyana &Uuml;niversitesi (Avusturya) ev sahipliğinde y&uuml;r&uuml;t&uuml;len ve Avusturya Bilim Fonu (FWF-&Ouml;sterreichischer Wissenschaftsfonds) tarafından finanse edilen &ldquo;DANFront: Orta ve Aşağı Tuna&rsquo;da Erken Modern Osmanlı Askeri Sınırının &Ccedil;evre Tarihi&rdquo; projesinin bir par&ccedil;ası olarak oluşturulan DANFront web sitesini ziyaret ettiğiniz i&ccedil;in teşekk&uuml;r ederiz. Bu Web Sitesini kullanarak, aşağıdaki Kullanım Şartlarını kabul etmiş sayılırsınız. Eğer bu Kullanım Şartlarını kabul etmiyorsanız, l&uuml;tfen bu Web Sitesini kullanmaktan ka&ccedil;ınınız. DANFront projesi, bu Kullanım Şartlarını zaman zaman değiştirme hakkını saklı tutar. Değiştirilen Kullanım Şartları Web Sitesinde yayınlanacaktır.</p>' +
        '<h3>Tanımlar</h3>' +
        '<p>&ldquo;DANFront&rdquo; web sitesi (bundan b&ouml;yle &ldquo;Web Sitesi&rdquo; olarak anılacaktır), yazılım ve bilgilerden, &ouml;zellikle de &ouml;n y&uuml;z (front-end) web sayfalarından ve arka y&uuml;z (back-end) sunucularımız ile veri tabanlarımızda saklanan materyal ve bilgilerden oluşmaktadır.</p>' +
        '<h3>Telif Hakkı</h3>' +
        '<p>DANFront projesi; yazılımı da dahil olmak &uuml;zere Web Sitesinin t&uuml;m unsurları &uuml;zerindeki t&uuml;m telif haklarının (veri tabanı hakları, fikri m&uuml;lkiyet ve sınai m&uuml;lkiyet hakları vb.) m&uuml;nhasır sahibidir. T&uuml;m bu haklar saklıdır ve Avusturya telif hakkı hukuku ile uluslararası antlaşmalar tarafından korunmaktadır. Web Sitesi, materyal se&ccedil;imi ve i&ccedil;eriğinin sınıflandırılmasında bir&ccedil;ok &ouml;zg&uuml;n unsur barındırmakta olup; bu nedenle telif hakkı yasaları uyarınca korunan &ouml;zg&uuml;n bir eser niteliğindedir. Bu web sitesinin geliştirilmesi ve işletilmesinin, FWF tarafından sağlanan fonlar ve Viyana &Uuml;niversitesi Yakın Doğu Araştırmaları Enstit&uuml;s&uuml; tarafından sağlanan operasyonel kaynaklar sayesinde ger&ccedil;ekleştiğini l&uuml;tfen unutmayınız.</p>' +
        '<p>Web Sitesindeki bilgilere (dijitalleştirilmiş materyaller, metinler, fotoğraflar, resimler, videolar vb. dahil ancak bunlarla sınırlı olmamak &uuml;zere) erişime yalnızca kişisel, eğitim veya araştırma ama&ccedil;larıyla izin verilir. Bu Web Sitesindeki bilgileri kullanarak herhangi bir kamuya a&ccedil;ık metin yazarsanız (&ouml;rneğin akademik veya araştırma makalesi, k&ouml;şe yazısı, blog g&ouml;nderisi vb.) veya kamuya a&ccedil;ık bir duyuru ya da sunum yaparsanız, bu Web Sitesini kaynak olarak g&ouml;stermeniz gerekmektedir. Bu Web Sitesine nasıl d&uuml;zg&uuml;n şekilde atıfta bulunacağınızla ilgili talimatlar i&ccedil;in l&uuml;tfen <a href="sources">Atıf (Citation) sayfasını</a> kullanınız.</p>' +
        '<p>A&ccedil;ık&ccedil;a yazılı izin verilmediği s&uuml;rece, bu Web Sitesinin herhangi bir unsurunu tamamen veya kısmen kopyalamak, &ccedil;oğaltmak, yeniden yayınlamak, başka web sitelerine y&uuml;klemek, iletmek, bir sunucuya y&uuml;klemek, dağıtmak, kamuya sunmak, değiştirmek, t&uuml;retilmiş eserler yaratmak ve genel olarak herhangi bir şekilde ticari ama&ccedil;la ya da DANFront projesi tarafından a&ccedil;ık&ccedil;a izin verilmeyen başka bir ama&ccedil;la kullanmak yasaktır.</p>' +
        '<p>Web Sitesi i&ccedil;eriğinin tamamının veya herhangi bir kısmının veri madenciliğiyle &ccedil;ekilmesi (extraction) ve/veya yeniden kullanılması yasaktır. Bu Web Sitesinin kullanıcıları, Web Sitesinin normal kullanımıyla &ccedil;elişen veya DANFront projesinin meşru &ccedil;ıkarlarına makul olmayan bir şekilde m&uuml;dahale eden her t&uuml;rl&uuml; eylemden ka&ccedil;ınmalıdır.</p>' +
        '<p>Web Sitesinde yer alan tescilli veya tescilsiz ticari markalar, logolar, markalar, ticari unvanlar ve ayırt edici unvanlar DANFront projesine veya DANFront projesinin &uuml;&ccedil;&uuml;nc&uuml; taraf iş ortaklarına aittir ve yasalar &ccedil;er&ccedil;evesinde korunmaktadır. Buradaki hi&ccedil;bir ibare, kullanıcıya yukarıdaki ticari markaları ve/veya ayırt edici işaretleri kullanma lisansı verildiği şeklinde yorumlanamaz. Bunların herhangi bir şekilde &ccedil;oğaltılması veya kullanılması kesinlikle yasaktır.</p>' +
        '<h3>Kullanıcı Tarafından &Uuml;retilen ve G&ouml;nderilen İ&ccedil;erik</h3>' +
        '<p>Web Sitesi, DANFront projesine herhangi bir i&ccedil;eriğin g&ouml;nderilmesi i&ccedil;in gerekli ara&ccedil;ları sunmaktadır (iletişim formunu doldurarak veya bir e-posta g&ouml;ndererek). Bu i&ccedil;erik, elektronik olarak aktarılabilecek her şey (metin, resim, video vb.) olabilir. Web Sitesine g&ouml;nderdiğiniz her t&uuml;rl&uuml; i&ccedil;erik kendi &ouml;zg&uuml;n &ccedil;alışmanız olmalı ve &uuml;&ccedil;&uuml;nc&uuml; bir şahsa veya kuruluşa ait olan ya da herhangi bir hukuk d&uuml;zeninde &uuml;&ccedil;&uuml;nc&uuml; bir şahsın veya kuruluşun iznini gerektirebilecek hi&ccedil;bir şey i&ccedil;ermemeli, barındırmamalı veya bunlara atıfta bulunmamalıdır (bu kısıtlama bireylerin tasvirini veya herhangi bir kişisel kimlik bilgisini de kapsar). İ&ccedil;eriği g&ouml;ndererek, i&ccedil;eriğin yasa dışı, saldırgan veya iftira niteliğinde olmadığını beyan ve taahh&uuml;t eder; DANFront projesine i&ccedil;eriği kullanması i&ccedil;in geri alınamaz ve sınırsız bir izin ile i&ccedil;eriği telif &uuml;creti, &ouml;deme veya başka bir tazminat olmaksızın Web Sitesine y&uuml;kleme hakkını a&ccedil;ık&ccedil;a vermiş olursunuz. G&ouml;nderici, Web Sitesinde uygun bir atıf yapılmasını istiyorsa, ilgili bilgileri formda veya e-postalarında belirtmelidir. G&ouml;nderici, i&ccedil;eriğin DANFront projesi veya Web Sitesi kullanıcıları tarafından sosyal medya platformlarında g&ouml;r&uuml;nebileceğini veya paylaşılabileceğini bilmelidir. DANFront projesi, i&ccedil;eriğin Web Sitesinde kullanılabilir ve yayınlanabilir olup olmadığını belirleme yetkisine tamamen kendi takdirine bağlı olarak sahiptir. DANFront projesi, g&ouml;nderilen i&ccedil;eriğin tamamını veya bir kısmını kendi takdirine bağlı olarak yayınlayabilir, inceleyebilir, değiştirebilir veya kaldırabilir.</p>' +
        '<h3>Web Sitesine Erişim</h3>' +
        '<p>DANFront projesi, Web Sitesinin g&uuml;n&uuml;n 24 saati erişilebilir olmasını sağlamak i&ccedil;in her t&uuml;rl&uuml; &ccedil;abayı g&ouml;stermektedir. Ancak, herhangi bir nedenle Web Sitesinin kullanılamaması, bağlantının kesilmesi veya bağlantının hatalı olması durumunda proje sorumlu tutulamaz. DANFront projesi, Web Sitesinin g&uuml;venli olacağını garanti etmez. L&uuml;tfen elektronik ekipmanınızın vir&uuml;ss&uuml;z ve m&uuml;kemmel durumda olduğunu teyit ediniz.</p>' +
        '<h3>Yayınlanan Bilgilerin Kalitesi ve Sorumluluğun Sınırlandırılması</h3>' +
        '<p>DANFront projesi, Web Sitesi aracılığıyla yayılan bilgilerin kalitesini sağlamak i&ccedil;in elinden gelen her şeyi yapacaktır. Bununla birlikte, Coğrafya B&ouml;l&uuml;m&uuml; ve SICF, b&uuml;y&uuml;k hacim ve kendine &ouml;zg&uuml; &ouml;zellikler nedeniyle bilgilerin doğruluğunu, eksiksizliğini veya g&uuml;venilirliğini tam olarak garanti etmez. Web Sitesi, bilgilerini &ldquo;olduğu gibi&rdquo; (as is) esasına g&ouml;re sunar; bu nedenle DANFront projesi, hatalı, eksik veya &uuml;&ccedil;&uuml;nc&uuml; şahısların haklarını ihlal eden bilgilerden kaynaklanabilecek doğrudan veya dolaylı hi&ccedil;bir zarardan sorumlu tutulamaz.</p>' +
        '<p>DANFront projesi (Web Sitesini işleten &ccedil;alışanlar/y&uuml;kleniciler dahil), Web Sitesine erişiminiz, kullanımınız veya kullanamamanız sonucunda ortaya &ccedil;ıkabilecek her t&uuml;rl&uuml; zarardan (doğrudan veya dolaylı) dolayı her t&uuml;rl&uuml; sorumluluğu reddeder.</p>' +
        '<p>DANFront projesi, kendi takdirine bağlı olarak şu hakları saklı tutar:</p>' +
        '<ul><li>Web Sitesine erişim ge&ccedil;ici olarak kesilse dahi, &ouml;nceden bildirimde bulunmaksızın Web Sitesinde ve i&ccedil;eriğinde zaman zaman değişiklikler yapmak, ve</li>' +
        '<li>Web Sitesine erişimi tamamen veya kısmen engellemek ve/veya Web Sitesinde yer alan herhangi bir arşivi, unsuru veya bilgiyi kaldırmak.</li></ul>' +
        '<p>Yukarıdaki sorumluluk sınırlamaları, yasaların izin verdiği en geniş &ouml;l&ccedil;&uuml;de ge&ccedil;erlidir.</p>' +
        '<h3>Web Sitesinin Yasaklı Kullanımları</h3>' +
        '<p>T&uuml;m kullanıcılar, Web Sitesini DANFront projesinin takdirine bağlı olarak uygunsuz olan ve/veya Avusturya veya AB yasalarını ihlal eden hi&ccedil;bir şekilde kullanmamalıdır.</p>' +
        '<p>Web Sitesinin yasaklı kullanımları bunlarla sınırlı olmamak &uuml;zere şunları i&ccedil;erir:</p>' +
        '<ul><li>DANFront projesinin Web Sitesi, yazılımları, ticari markaları, logoları, ayırt edici unvanları vb. &uuml;zerindeki telif ve sınai m&uuml;lkiyet haklarını ihlal eden eylemler.</li>' +
        '<li>&Uuml;&ccedil;&uuml;nc&uuml; bir tarafın gizlilik hakkını (kişisel verilerin yetkisiz ifşası gibi) veya diğer &uuml;&ccedil;&uuml;nc&uuml; taraf haklarını ihlal eden eylemler.</li>' +
        '<li>DANFront projesinin sunucularına veya elektronik sistemlerine vir&uuml;s ya da diğer k&ouml;t&uuml; ama&ccedil;lı materyalleri bulaştırmak gibi Web Sitesine y&ouml;nelik her t&uuml;rl&uuml; yetkisiz erişim veya saldırı.</li></ul>' +
        '<p>Abonelik kaydı yapılmış veya yetkilendirilmiş kullanıcılara Web Sitesine erişim hakkı verilmesi durumunda, DANFront projesi, kullanıcının yasaları ve/veya işbu Kullanım Şartlarını ihlal ettiğine inanması halinde, herhangi bir zamanda ilgili kullanıcı hesabının erişimini iptal etme hakkını saklı tutar.</p>' +
        '<h3>Harici Web Siteleri</h3>' +
        '<p>Web Sitesi, harici kaynaklara ve &uuml;&ccedil;&uuml;nc&uuml; taraf web sitelerine bağlantılar i&ccedil;ermektedir. DANFront projesinin bu web siteleri &uuml;zerinde herhangi bir kontrol&uuml; yoktur ve bu nedenle harici web sitelerinde bulunan veya bu siteler aracılığıyla sunulan erişilebilirlik, i&ccedil;erik, reklamlar, &uuml;r&uuml;nler, hizmetler veya diğer materyallerden sorumlu değildir.</p>' +
        '<h3>Uygulanacak Hukuk</h3>' +
        '<p>Kullanım Şartları, bunlarda yapılacak her t&uuml;rl&uuml; değişiklik ve Web Sitesinin kullanımı Avusturya hukukuna tabidir. Web Sitesinin kullanımından doğan her t&uuml;rl&uuml; talep yalnızca Viyana (Avusturya) Mahkemelerine g&ouml;t&uuml;r&uuml;lecektir.</p>' +
        LEGAL_DISCLAIMER_TR
    },
    privacy: {
      titleTr: 'Gizlilik Politikası',
      titleEn: 'Privacy Policy',
      bodyEn: '<p class="legal-updated">Last updated: 09/06/2026</p>' +
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
        '<p>We may occasionally amend this Privacy Policy to account for changes to our services and the way we handle your personal information. Therefore, we suggest that you frequently visit this Privacy Policy.</p>',
      bodyTr: '<p class="legal-updated">Son g&uuml;ncelleme: 09/06/2026</p>' +
        '<h3>Tanımlar</h3>' +
        '<dl class="legal-definitions"><dt>DANFront</dt><dd>&ldquo;DANFront: Orta ve Aşağı Tuna B&ouml;lgesinde Erken Modern D&ouml;nem Osmanlı Askeri Sınır Boyunun &Ccedil;evre Tarihi&rdquo; projesi.</dd>' +
        '<dt>GDPR</dt><dd>Genel Veri Koruma Y&ouml;netmeliği.</dd>' +
        '<dt>Veri Sorumlusu</dt><dd>Herhangi bir kişisel bilginin hangi ama&ccedil;larla ve ne şekilde işleneceğini (tek başına, birlikte veya diğer kişilerle ortaklaşa) belirleyen ger&ccedil;ek veya t&uuml;zel kişi anlamına gelir.</dd>' +
        '<dt>Veri İşleyen</dt><dd>Verileri, Veri Sorumlusu adına işleyen ger&ccedil;ek veya t&uuml;zel kişi anlamına gelir.</dd>' +
        '<dt>İlgili Kişi (Veri Sahibi)</dt><dd>Hizmetimizi kullanan ve Kişisel Verilerin konusu olan yaşayan her bir bireydir.</dd></dl>' +
        '<h3>1. Kişisel verilerin işlenmesine ilişkin ilkeler</h3>' +
        '<p>Kişisel verileri işlemeye y&ouml;nelik ilkelerimiz şunlardır:</p>' +
        '<ul><li><strong>Adillik ve hukuka uygunluk.</strong> Kişisel verileri işlerken, İlgili Kişilerin bireysel hakları korunmalıdır. T&uuml;m kişisel veriler yasal ve adil bir şekilde toplanmalı ve işlenmelidir.</li>' +
        '<li><strong>Belirli bir ama&ccedil;la sınırlı olma.</strong> İlgili Kişinin kişisel verileri yalnızca belirli ama&ccedil;lar doğrultusunda işlenmelidir.</li>' +
        '<li><strong>Şeffaflık.</strong> İlgili Kişi, verilerinin nasıl toplandığı, işlendiği ve kullanıldığı konusunda bilgilendirilmelidir.</li></ul>' +
        '<h3>2. Hangi kişisel verileri topluyor ve işliyoruz</h3>' +
        '<p>Kayıtlı kullanıcılar i&ccedil;in DANFront, &ccedil;eşitli ama&ccedil;larla birka&ccedil; farklı t&uuml;rde kişisel veri toplar. Kişisel Veriler aşağıdakileri i&ccedil;erebilir ancak bunlarla sınırlı değildir:</p>' +
        '<ul><li>E-posta adresi</li><li>Ad ve soyadı</li><li>Adres, Eyalet, B&ouml;lge, Posta Kodu, Şehir</li></ul>' +
        '<p>Kayıtlı olmayan kullanıcılar i&ccedil;in hi&ccedil;bir kişisel veri toplamıyoruz.</p>' +
        '<p>T&uuml;m kullanıcılar i&ccedil;in şunları kullanıyoruz:</p>' +
        '<ul><li>Web uygulaması ayarları ve oturum y&ouml;netimi i&ccedil;in web uygulaması &ccedil;erezleri</li><li>Hizmetlerimizi geliştirmek i&ccedil;in Google Analytics.</li></ul>' +
        '<p>Web uygulaması &ccedil;erezleri, uygulamanın ayrılmaz bir par&ccedil;asıdır. Verilerinizin Google Analytics tarafından kullanılmasını &ouml;nlemek i&ccedil;in, Google Analytics JavaScript (ga.js, analytics.js, dc.js) i&ccedil;in geliştirilen Google Analytics kapsam dışı bırakma tarayıcı eklentisini kullanabilirsiniz. Kapsam dışı kalmak istiyorsanız, web tarayıcınız i&ccedil;in olan eklentiyi indirip y&uuml;kleyin. Google Analytics kapsam dışı bırakma eklentisi Chrome, Internet Explorer 11, Safari, Firefox ve Opera ile uyumlu olacak şekilde tasarlanmıştır. Eklentinin &ccedil;alışabilmesi i&ccedil;in tarayıcınızda d&uuml;zg&uuml;n bir şekilde y&uuml;klenmesi ve y&uuml;r&uuml;t&uuml;lmesi gerekir. Internet Explorer i&ccedil;in 3. taraf &ccedil;erezlerin etkinleştirilmiş olması gerekmektedir. Kapsam dışı bırakma se&ccedil;eneği ve tarayıcı eklentisinin d&uuml;zg&uuml;n şekilde nasıl kurulacağı hakkında daha fazla bilgiyi <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">buradan</a> edinebilirsiniz.</p>' +
        '<h3>3. Kişisel verileri nasıl kullanıyoruz</h3>' +
        '<p>DANFront, toplanan kişisel verileri &ccedil;eşitli ama&ccedil;lar i&ccedil;in kullanır:</p>' +
        '<ul><li>Size hizmet sunmak amacıyla</li><li>Hizmetlerimiz ve/veya &uuml;r&uuml;nlerimizdeki değişiklikleri size bildirmek amacıyla</li><li>Kullanıcı desteği sağlamak amacıyla</li>' +
        '<li>Hizmetlerimizi geliştirebilmek i&ccedil;in analizler veya değerli bilgiler toplamak amacıyla</li><li>Teknik sorunları tespit etmek, &ouml;nlemek ve gidermek amacıyla</li>' +
        '<li>İ&ccedil;erik girişine ve y&ouml;netimine izin vermek amacıyla</li><li>Yasal haklarımızı uygulamak amacıyla</li><li>Kullanım Koşullarının olası ihlallerini tespit etmek amacıyla</li>' +
        '<li>Tabi olduğumuz her t&uuml;rl&uuml; yasal gerekliliğe uymak amacıyla</li></ul>' +
        '<h3>4. Kişisel verilerin toplanması ve işlenmesinin yasal dayanağı</h3>' +
        '<p>DANFront&rsquo;un bu Veri Koruma Politikası&rsquo;nda a&ccedil;ıklanan kişisel verileri toplamasının ve kullanmasının yasal dayanağı, topladığımız kişisel verilere ve bu bilgileri topladığımız &ouml;zel bağlama bağlıdır:</p>' +
        '<ul><li>DANFront&rsquo;un sizinle bir s&ouml;zleşme yapması gerektiğinde</li><li>DANFront&rsquo;a bunun i&ccedil;in izin verdiğinizde</li>' +
        '<li>Kişisel verilerinizin işlenmesi DANFront&rsquo;un meşru menfaatleri dahilinde olduğunda</li><li>DANFront&rsquo;un yasalara uyması gerektiğinde</li></ul>' +
        '<h3>5. Kişisel verilerin saklanması</h3>' +
        '<p>DANFront, kişisel bilgilerinizi yalnızca bu Veri Koruma Politikası&rsquo;nda belirtilen ama&ccedil;lar i&ccedil;in gerekli olduğu s&uuml;rece saklayacaktır. DANFront, yasal y&uuml;k&uuml;ml&uuml;l&uuml;klerimize uymak, ihtilafları &ccedil;&ouml;zmek ve politikalarımızı uygulamak i&ccedil;in gerekli olan &ouml;l&ccedil;&uuml;de bilgilerinizi saklayacak ve kullanacaktır.</p>' +
        '<h3>6. Veri koruma hakları</h3>' +
        '<p>Avrupa Ekonomik Alanı (AEA) sakiniyseniz, belirli veri koruma haklarına sahipsiniz. Hakkınızda hangi kişisel verileri tuttuğumuzun size bildirilmesini ve bunun sistemlerimizden kaldırılmasını istiyorsanız, l&uuml;tfen bizimle iletişime ge&ccedil;in. Belirli durumlarda, aşağıdaki veri koruma haklarına sahipsiniz:</p>' +
        '<ul><li>Hakkınızdaki bilgilere erişme, bunları g&uuml;ncelleme veya silme hakkı</li><li>D&uuml;zeltme hakkı</li><li>İtiraz etme hakkı</li>' +
        '<li>Kısıtlama hakkı</li><li>Veri taşınabilirliği hakkı</li><li>Rızayı geri &ccedil;ekme hakkı</li></ul>' +
        '<h3>7. Sorular</h3>' +
        '<p>Bu Gizlilik Politikası veya Gizlilik Politikası kapsamında toplanan herhangi bir veri ile ilgili sorularınız varsa, DANFront ile <a href="mailto:onur.inal@univie.ac.at">onur.inal@univie.ac.at</a> adresinden iletişime ge&ccedil;ebilirsiniz. L&uuml;tfen Yunanistan Veri Koruma Otoritesi&rsquo;ne (Hellenic Data Protection Authority) <a href="http://www.dpa.gr" target="_blank" rel="noopener noreferrer">http://www.dpa.gr</a> adresinden şikayette bulunma hakkınızın olduğunu unutmayın.</p>' +
        '<h3>8. Gizlilik politikamızdaki değişiklikler</h3>' +
        '<p>Hizmetlerimizdeki değişiklikleri ve kişisel bilgilerinizi ele alma şeklimizi yansıtmak amacıyla bu Gizlilik Politikası&rsquo;nda zaman zaman değişiklikler yapabiliriz. Bu nedenle, bu Gizlilik Politikası&rsquo;nı sık sık ziyaret etmenizi &ouml;neririz.</p>' +
        LEGAL_DISCLAIMER_TR
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
    overlay.querySelector('.legal-modal-body').innerHTML = lang === 'tr' ? content.bodyTr : content.bodyEn;
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
