import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useShop from '../../hooks/useShop';
import ProductSlide from './ProductSlide';
import 'swiper/swiper.scss';

const ProductsSlider = ({ handleAddToCart }) => {
	const { response, error, loading } = useShop('recommendeds');

	// Init Siper navigation
	SwiperCore.use([Pagination, Autoplay]);

	const autoplayDelay = 5000;

	return (
		<>
			{!loading && (
				<Swiper
					className="grid products-slider"
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: autoplayDelay }}
					spaceBetween={28}
					pagination={{ clickable: true }}
					initialSlide={1}
				>
					{response.map((product, index) => {
						return (
							<SwiperSlide
								key={`product-slide-${index}`}
								className="product-slider__slide"
							>
								<ProductSlide
									name={product.name}
									image={product.defaultImage}
									description={product.description}
									price={product.price}
									discount={product.discount}
									handleAddToCart={handleAddToCart}
									duration={autoplayDelay}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</>
	);
};

export default ProductsSlider;
