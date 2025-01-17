const { createApp } = Vue;

createApp({
    data() {
        return {
            images: [
                "gallery/FB_IMG_1678370474189.jpg",
                "gallery/IMG_20250112_141404_0879.jpg",
                "gallery/IMG_20250112_141704_0530.jpg",
                "gallery/IMG_20250112_141725_0128.jpg",
                "gallery/IMG_20250115_131337.jpg",
                "gallery/IMG_20250115_131355.jpg",
                "gallery/IMG_20250115_131428.jpg",
                "gallery/IMG_20250115_131448.jpg",
                "gallery/IMG_20250115_131524.jpg",
                "gallery/IMG_20250115_131600.jpg",
                "gallery/IMG_20250115_131617.jpg",
                "gallery/IMG_20250115_131638.jpg",
                "gallery/IMG_20250115_131657.jpg",
                "gallery/IMG_20250115_131727.jpg",
                "gallery/IMG_20250115_131739.jpg",
                "gallery/IMG_20250115_131752.jpg",
                "gallery/IMG_20250115_131835.jpg",
                "gallery/IMG_20250115_131854.jpg",
                "gallery/IMG_20250115_131912.jpg",
                "gallery/IMG_20250115_131929.jpg",
                "gallery/IMG_20250115_131945.jpg",
                "gallery/IMG20230611204028.jpg"

            ],
            currentIndex: 0
        };
    },
    methods: {
        prevImage() {
            this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
        }
    }
}).mount('#app');