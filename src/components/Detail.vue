<template lang="html">
	<div>
		<mu-circular-progress class="loading" v-if="loadingData" :size="80"/>
		<div class="detail" v-else>
			<div class="detail-left">
				<img class="movie-poster"/>
			</div>
		</div>
		<div class="detail-right">
			<p class="movie-title">{{movie.title}} <span{{ movie.original_title }}></span></p>
			<  
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		created() {
			this.getMovie(this.$route.params.title)
			document.title = this.$route.name
		},
		data() {
			return {
				movie: {},
				loadingData: true
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1)
			},
			getMovie(title) {
				//由于自定的movie模型没有足够的数据，故用前端请求豆瓣的api
				let searchUrl = 'https://bird.ioliu.cn/v1/?url=http://api.douban.com/v2/movie/search?q='
				this.$http.get(`${serachUrl}${title}`)
					.then(res => {
						console.log(res.data)
						let movieUrl = 'https://bird.ioliu.cn/v1/?url=http://api.douban.com/v2/movie/subject'
						let movieId = res.data.subjects[0].id
						if (!!movieId) {
							this.$http.get(`{movieUrl}/${movieId}`)
							.then(res => {
								console.dir(res.data)
								if (!!res.data) {
									this.movie = res.data
									setTimeout(()=>{
										document.querySelector('.movie-poster').src = this.movie.images.large
									},0)
									this.loadingData = false
								}
							})
							.catch(e => console.log(e))
						}
					})
					.catch(e => console.log(e))
			}
		}
	}
</script>