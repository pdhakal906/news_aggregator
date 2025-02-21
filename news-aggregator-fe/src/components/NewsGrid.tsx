import NewsCard from './NewsCard'
import { Button, Center, Group, SimpleGrid, Stack } from '@mantine/core';

const NewsGrid = () => {
  const data = [
    {
      "id": 268,
      "title": "६ सय जनाभन्दा बढी कलाकारलाई कमाउन सघाउने राजेन्द्र",
      "link": "https://www.setopati.com/art/interview/351608",
      "image_url": "https://img.setoparty.com/uploads/posts/Rajendra-aryal-2-1740075553.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:44.091143+05:45"
    },
    {
      "id": 411,
      "title": "बेलायतको हाउस अफ लर्ड्समा हिमालयन अवार्ड वितरण",
      "link": "https://ekantipur.com/diaspora/2025/02/05/himalayan-award-delivery-on-the-house-of-lord-of-the-uk-39-01.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/4d0c1acc-846c-43c3-962a-c3b1a0701514-0522025095337.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:11.707411+05:45"
    },
    {
      "id": 266,
      "title": "नेपाल टेलिकमले माग्यो उपप्रबन्धकदेखि जुनियर टेक्निसियनसम्म ६९ कर्मचारी",
      "link": "https://www.setopati.com/kinmel/employment/351617",
      "image_url": "https://img.setoparty.com/uploads/posts/NTC-Nepal-Telecom-1712129287.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:42.271550+05:45"
    },
    {
      "id": 410,
      "title": "बेलायती सहायक विदेशमन्त्री वेस्टसँग राजदूत घिमिरेको भेटवार्ता ",
      "link": "https://ekantipur.com/diaspora/2025/02/05/ambassador-ghumiti-met-with-british-assistant-foreign-officer-west-west-10-59.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/chandra-ghimire-0522025092528.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:10.291657+05:45"
    },
    {
      "id": 264,
      "title": "यस्ता छन् रास्वपा सचिवालय बैठकका निर्णय",
      "link": "https://www.setopati.com/politics/351605",
      "image_url": "https://img.setoparty.com/uploads/posts/rsp-office-1722699113.jpeg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:40.522159+05:45"
    },
    {
      "id": 409,
      "title": "नेपाल-स्टोनिया चेम्बर अफ कमर्स स्थापना हुने",
      "link": "https://ekantipur.com/diaspora/2025/02/01/nepal-stone-shipmber-of-commerce-will-be-established-27-30.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/nep-stonoa-0122025104155.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:05.736028+05:45"
    },
    {
      "id": 262,
      "title": "यसकारण भइरहेको छ सामाजिक सञ्जाल विधेयकको सर्वत्र विरोध (भिडिओ)",
      "link": "https://www.setopati.com/politics/351596",
      "image_url": "https://img.setoparty.com/uploads/posts/social-media-bill-1740054399.png",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:38.664413+05:45"
    },
    {
      "id": 408,
      "title": "पहिलो चरणमा १३ सय ६५ नेपाली अमेरिकाबाट फर्काइँदै",
      "link": "https://ekantipur.com/diaspora/2025/01/30/by-the-first-round-135-nepali-america-is-being-returned-from-the-united-states-35-36.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/deportation-new-2812025013130.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:04.821830+05:45"
    },
    {
      "id": 260,
      "title": "नेपालको इभी बजारमा टाटाले उतार्दैछ आफ्नो प्रिमियम मोडल 'कर्भ'",
      "link": "https://www.setopati.com/kinmel/automobiles/351597",
      "image_url": "https://img.setoparty.com/uploads/posts/rajan-babu-shrestha-1740054105.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:36.921059+05:45"
    },
    {
      "id": 407,
      "title": "लुम्बिनीमा ‘मेरो विद्यालय, मेरो दायित्व’ अभियान",
      "link": "https://ekantipur.com/Education/2025/02/20/my-school-my-responsibility-campaign-in-lumbini-09-40.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/mero-2022025052355.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:03.908314+05:45"
    },
    {
      "id": 258,
      "title": "पृथ्वी राजमार्गको विमलनगर खण्ड एक महिना आंशिक बन्द हुने",
      "link": "https://www.setopati.com/social/351615",
      "image_url": "https://img.setoparty.com/uploads/posts/KN_Damauli-Muglinpokhararoadphoto4-copy-1737551490.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:35.204517+05:45"
    },
    {
      "id": 406,
      "title": "पोखरा विश्वविद्यालयबाट सात हजार ८७२ विद्यार्थी दीक्षित",
      "link": "https://ekantipur.com/Education/2025/02/20/seven-thousand-872-students-graduated-from-pokhara-university-27-22.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/kpoli-2022025104049.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:02.992823+05:45"
    },
    {
      "id": 256,
      "title": "गुन्यालफाँटाका बादीहरू घरमा ताल्चा झुन्ड्याएर किन लागे भारत?",
      "link": "https://www.setopati.com/social/351614",
      "image_url": "https://img.setoparty.com/uploads/posts/111-1740102157.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:33.467626+05:45"
    },
    {
      "id": 405,
      "title": "मुलुकलाई आत्मनिर्भर बनाउन प्राविधिक शिक्षा : महासचिव पोखरेल",
      "link": "https://ekantipur.com/Education/2025/02/18/technical-education-to-make-the-country-independent-secretary-general-pokharel-33-08.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/img6822-1822025114641.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:30:02.063586+05:45"
    },
    {
      "id": 254,
      "title": "ट्रम्पलाई बालेनले भने- अमेरिका अल्छीहरूको देश हो",
      "link": "https://www.setopati.com/politics/351613",
      "image_url": "https://img.setoparty.com/uploads/posts/balen shah1653646059.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:31.705533+05:45"
    },
    {
      "id": 404,
      "title": "६ वर्ष पुगेकालाई मात्रै कक्षा १ मा भर्ना गर्न सुझाव",
      "link": "https://ekantipur.com/Education/2025/02/17/it-is-recommended-to-enroll-only-those-who-are-6-years-old-in-class-1-29-10.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2019/miscellaneous/school-0412019042510-1000x0.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:29:56.590587+05:45"
    },
    {
      "id": 252,
      "title": "यस्तो छ आज विदेशी मुद्राको विनिमयदर",
      "link": "https://www.setopati.com/kinmel/banking/351612",
      "image_url": "https://img.setoparty.com/uploads/posts/money-exchnage-rate1637638735.jpg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:29.999110+05:45"
    },
    {
      "id": 403,
      "title": "अक्षर खुट्याउँदै राउटे बालबालिका",
      "link": "https://ekantipur.com/Education/2025/02/16/children-scrawling-letters-16-50.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/miscellaneous/raute-reading-5-1622025042727-1000x0.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:29:52.176014+05:45"
    },
    {
      "id": 250,
      "title": "एकीकृत समाजवादीको केन्द्रीय कमिटी आज बस्दै",
      "link": "https://www.setopati.com/politics/351611",
      "image_url": "https://img.setoparty.com/uploads/posts/WhatsApp-Image-2025-02-18-at-14.51.27-1740013050.jpeg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:27.977062+05:45"
    },
    {
      "id": 402,
      "title": "अनाथ र विपन्न निःशुल्क पढ्ने स्कुलको अनुमति मेयरले रोके",
      "link": "https://ekantipur.com/Education/2025/02/15/the-mayor-stopped-the-permission-of-the-school-for-orphans-and-poor-to-study-free-of-charge-38-35.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/ratna-school-1522025055310.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:29:51.253181+05:45"
    },
    {
      "id": 248,
      "title": "केबलकार निर्माणको विषयमा झडप हुँदा प्रहरीसहित १३ जना घाइते",
      "link": "https://www.setopati.com/social/351610",
      "image_url": "https://img.setoparty.com/uploads/posts/phalelung-1740099053.JPG",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:26.239925+05:45"
    },
    {
      "id": 401,
      "title": "त्रिविले ‘ट्रान्सक्रिप्ट’ लगायत प्रमाणपत्रका लागि अनलाइन फाराम भर्ने व्यवस्था गर्दै",
      "link": "https://ekantipur.com/Education/2025/02/14/providing-online-form-filling-for-certificates-including-transcript-52-47.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2024/third-party/tribhuwanuniversitytu-24122023031536-0812024075715.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:29:50.347057+05:45"
    },
    {
      "id": 246,
      "title": "पाँच प्रदेशमा वर्षा र हिमपातको सम्भावना",
      "link": "https://www.setopati.com/social/351609",
      "image_url": "https://img.setoparty.com/uploads/posts/mausam-ink1687135318.jpeg",
      "source": "setopati",
      "created_at": "2025-02-21T14:50:24.508549+05:45"
    },
    {
      "id": 400,
      "title": "कक्षा १२ को परीक्षा वैशाख ११ देखि [समयतालिकासहित]",
      "link": "https://ekantipur.com/Education/2025/02/13/class-12-exams-from-may-11-with-time-table-26-23.html",
      "image_url": "https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2025/third-party/neb-12-1822024035148-1322025114014.jpg&w=1001&h=0",
      "source": "ekantipur",
      "created_at": "2025-02-21T21:29:49.365125+05:45"
    }
  ]
  return (
    <main>
      <Stack gap={20}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 4 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          {data.map((news) => (
            <NewsCard key={news.id} newsItem={news} />
          ))}
        </SimpleGrid>
        <Center>
          <Group>
            <Button>First</Button>
            <Button>Prev</Button>
            <Button>Next</Button>
            <Button>Last</Button>
          </Group>
        </Center>

      </Stack>
    </main>
  );
}

export default NewsGrid
