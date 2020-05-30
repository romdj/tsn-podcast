import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    start_url = ['https://www.tsn.ca/radio/montreal-690/audio']

    yield scrapy.Request(start_url, ) {'title': title.css('a ::text').get()}
    def parse(self, response):
        print(response.html('content-playlist'))
        # for title in response.css('.post-header>h2'):

        # for next_page in response.css('a.next-posts-link'):
        #     yield response.follow(next_page, self.parse)


