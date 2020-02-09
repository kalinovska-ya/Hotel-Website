// news posting - blog.html

const newsBlock = document.querySelector('.news-block');
   
const createNews = (title, image, imageName, pubdate, text) => {
    const newsArticle = document.createElement('article');

    newsArticle.className = 'news close';
    newsArticle.innerHTML = `<div class="news-preview flex">
        <div class="news-preview__image-box">
            <img class="news-preview__image" src="${image}" alt="${imageName}">
        </div>
        <div class="news-preview__content-box flex">
            <h3 class="news-preview__content-box-title">${title}</h3>
            <div class="news-preview__content-box-text">${text}</div>
            <div class="button news-preview__content-box-pseudo-button">Read more</div>
            <span class="news-preview__content-box-pubdate">${pubdate}</span> 
        </div>
    </div>

   <div class="news-full">
        <div class="news-full__text">${text}</div>
        <span class="news-full__pubdate">${pubdate}</span> 
    </div>`;

    return newsArticle;
};

newsBlock.append(createNews('News 1', 'images/promo3.svg', 'SJ Hotel News - Post 1', '20 Jan 2020', '<p>Text of first article. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus facilis incidunt voluptates quia laudantium quisquam, fugit sunt suscipit odio at eum quod iste molestiae veritatis voluptatibus. Fuga ullam delectus soluta laudantium magni doloribus nesciunt odit impedit fugit. Excepturi consectetur recusandae doloribus beatae repellendus nihil id, illum sequi voluptate temporibus molestias ex hic adipisci deleniti itaque ad! Facere perferendis dolor dolorem quis? Quisquam omnis vel, sint ipsa delectus animi, velit distinctio, necessitatibus accusamus voluptates nulla error magni! Non fugiat illo ipsam vel, ex omnis illum soluta at vitae voluptates voluptatem est aspernatur dolorem? Ipsam, odio excepturi numquam nobis assumenda porro!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus asperiores a voluptatum veritatis corporis nulla! Animi iure ab nam ullam cupiditate porro, laboriosam temporibus vel at numquam corporis unde debitis iusto sequi ducimus perspiciatis, maiores.</p><ul><li>Lorem 1</li><li>Lorem 2</li><li>Lorem 3</li><ul>'));
newsBlock.append(createNews('News 2', 'images/promo2.svg', 'SJ Hotel News - Post 2', '1 Jan 2020', '<p>Text of second article. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus facilis incidunt voluptates quia laudantium quisquam, fugit sunt suscipit odio at eum quod iste molestiae veritatis voluptatibus. Fuga ullam delectus soluta laudantium magni doloribus nesciunt odit impedit fugit. Excepturi consectetur recusandae doloribus beatae repellendus nihil id, illum sequi voluptate temporibus molestias ex hic adipisci deleniti itaque ad! Facere perferendis dolor dolorem quis? Quisquam omnis vel, sint ipsa delectus animi, velit distinctio, necessitatibus accusamus voluptates nulla error magni! Non fugiat illo ipsam vel, ex omnis illum soluta at vitae voluptates voluptatem est aspernatur dolorem? Ipsam, odio excepturi numquam nobis assumenda porro!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at magni eum ea deleniti sed perferendis labore. Similique, sunt, quis!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at magni eum ea deleniti sed perferendis labore. Similique, sunt, quis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at magni eum ea deleniti sed perferendis labore. Similique, sunt, quis!</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at magni eum ea deleniti sed perferendis labore. Similique, sunt, quis!</p>'));
newsBlock.append(createNews('News 3', 'images/rest-photo7.jpg', 'SJ Hotel News - Post 3', '1 Nov 2019', '<p>Text of third article. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus vel cumque nihil tempora eos, aperiam reprehenderit deleniti officia debitis natus ullam voluptas consequuntur harum et rem excepturi dolore aspernatur dolores minima ipsam? Eius iure nam consectetur commodi suscipit ipsa, dolorem odio rerum quae fugiat maxime, autem laudantium itaque nulla dignissimos dicta sapiente enim inventore laborum rem. Omnis architecto laudantium nesciunt voluptatibus earum pariatur ad beatae, ducimus perferendis, voluptates quod aperiam laborum, qui sit eaque asperiores itaque quaerat quidem officia veniam. Blanditiis libero molestiae autem est, repudiandae voluptate! Ratione ipsam consequuntur voluptatem eos, totam fuga tempore accusamus sint magni, eligendi amet assumenda dolorem iure. Ad laborum voluptates deleniti nihil architecto libero nesciunt iusto vitae fuga neque, repudiandae sapiente non, est praesentium, animi aliquam velit nisi accusamus, corporis nostrum ratione numquam quod quo ab. Culpa nesciunt eos corporis aspernatur quidem voluptas magni laboriosam molestiae, minus dolorum quae exercitationem, odit aut dolore voluptatum. Quod, nam et numquam magnam quibusdam sunt itaque velit suscipit labore unde ab aut quia neque tempore voluptatem libero mollitia nulla, laboriosam sapiente cum. Ad quia sapiente debitis reprehenderit commodi mollitia, dolorum vel, cumque ipsa minima sit nam iure assumenda molestiae adipisci necessitatibus consequuntur iusto. Ad, quis sequi. Vero sapiente neque repellat nobis at nesciunt totam rem, numquam doloribus dolores voluptatibus consequatur iure esse fugiat perferendis repudiandae eos, libero sequi ea sunt saepe, magnam! Cum odio deserunt facilis dolor ipsum excepturi commodi adipisci quos, molestiae, vitae itaque dolorum, voluptatibus consequuntur veniam qui. Eaque odio esse repudiandae perspiciatis, aspernatur delectus aliquid labore praesentium expedita impedit optio porro architecto eos sint ab culpa facere, dolores explicabo ipsa dolorum perferendis, ad consectetur corrupti! Natus rerum voluptatem molestiae facilis provident exercitationem in suscipit alias, veritatis quas temporibus maiores facere velit ratione et, amet eveniet sequi ullam quam repellat magni error! Distinctio velit tempora deleniti.Third news. Lorem ipsum dolor, sit amet consectetur adipisicing elit. imus exercitationem tenetur soluta.</p>'));
newsBlock.append(createNews('News 4', 'images/news1.jpg', 'SJ Hotel News - Post 4', '04 Mar 2019', '<p>Text of forth article. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo impedit doloribus quas quis reprehenderit minima quibusdam fuga saepe qui! Aliquam impedit esse voluptates deserunt corrupti, atque error rerum quasi. Vero, aut similique, architecto nesciunt nisi doloremque quasi consequatur quia autem, error facere sed earum dolor ratione possimus exercitationem tenetur soluta.</p>'));


// cut text in news-preview - blog.html

const cutText = () => {
    let maxlength = 200;

    const textBoxes = document.getElementsByClassName("news-preview__content-box-text");

    for (let i = 0; i < textBoxes.length; i++ ) {
        const text = document.getElementsByClassName("news-preview__content-box-text")[i].innerHTML;
        
        document.getElementsByClassName("news-preview__content-box-text")[i].innerHTML = text.slice( 0, maxlength ) + '...';
    }
};

cutText();


// open newsblock animation - blog.html

const newsItem = document.getElementsByClassName('news'),
      previews = document.getElementsByClassName('news-preview');

function toggleNews() {
    let itemClass = this.parentNode.className,
        buttonPushed = this.querySelector('.news-preview__content-box-pseudo-button');
    
    for (let i = 0; i < newsItem.length; i++) {
        newsItem[i].className = 'news close';
        buttonPushed.innerHTML = 'Read More';
    }
    
    if (itemClass == 'news close') {
        this.parentNode.className = 'news open';
        buttonPushed.innerHTML = 'Minimize';
    }
};


for (let i = 0; i < previews.length; i++) {
    previews[i].addEventListener('click', toggleNews, false);
};