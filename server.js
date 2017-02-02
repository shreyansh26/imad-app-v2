var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articleOne = {
  title: 'India | Shreyansh',
  date: 'Feb 2, 2017',
  heading:'India (Bharat)',
  content: `<p>
               India, officially the Republic of India (Bhārat Gaṇarājya),[e] is a country in South Asia. It is the seventh-largest country by area, the second-most populous country (with over 1.2 billion people), and the most populous democracy in the world. It is bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast. It shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the northeast; and Myanmar (Burma) and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives. India's Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia. Its capital is New Delhi; other metropolises include Mumbai, Kolkata, Chennai, Bangalore, Hyderabad and Ahmedabad.
           </p>
           <p>
               Home to the ancient Indus Valley Civilisation and a region of historic trade routes and vast empires, the Indian subcontinent was identified with its commercial and cultural wealth for much of its long history.[17] Four religions–Hinduism, Buddhism, Jainism, and Sikhism–originated in India, whereas Zoroastrianism, Judaism, Christianity, and Islam arrived in the first millennium CE, and they also played a part in shaping the region's diverse culture. Gradually annexed and brought under the administration of the British East India Company from the early 18th century and administered directly by the United Kingdom after the Indian Rebellion of 1857, it became an independent nation in 1947 after a struggle for independence that was marked by non-violent resistance led by Mahatma Gandhi.
           </p>
           <p>
               In 2015, the Indian economy was the world's seventh largest by nominal GDP and third largest by purchasing power parity.[14] Following market-based economic reforms in 1991, India became one of the fastest-growing major economies and is considered a newly industrialised country. However, it continues to face the challenges of poverty, corruption, malnutrition, and inadequate public healthcare. A nuclear weapons state and regional power, it has the third largest standing army in the world and ranks sixth in military expenditure among nations. India is a federal constitutional republic governed under a parliamentary system and consists of 29 states and 7 union territories. It is a pluralistic, multilingual and multi-ethnic society and is also home to a diversity of wildlife in a variety of protected habitats.
           </p>`
};

function createTemplate(data){
var title=data.title;
var heading= data.heading;
var date=data.date;
var content=data.content;
var HTMLTemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewpoort" content="width-device-width, initial-sacle=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        
        </head>
        
        <body>
            <div class="container">
                <div>
                <a href="/">Home</a>
            </div>
           <hr/>
           <h3>${heading}</h3>
           <div>
               ${date}
           </div>
           <div>
               ${content}
           </div>
           </div>
        </body>
    </html>
    `;
    return HTMLTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article2', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article3', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
