import React from 'react';
import LeniNo from '../../img/leni_No.png';

const cardText = 'hover:underline cursor-pointer';

function HotView() {
  return (
    <div className="container mx-auto bg-fuchsia-300 h-[750px] p-6 mb-5">
      <p className="text-3xl mb-4 p-4">주간 인기 글</p>
      {/* 1번 */}
      <div className="mb-5">
        <div className="h-[300px] border p-5 rounded-2xl bg-gray-100 flex gap-4">
          <img src={LeniNo} alt="No_img" className="block" />
          <div className="flex flex-col gap-2 ">
            <h3 className="font-bold text-2xl hover:underline cursor-pointer">
              Lorem, ipsum dolor.
            </h3>
            <p className={cardText}>NONONONO</p>
            <p className={cardText}>25/11/21</p>
            <p className={cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              officiis et animi tempora facere repellendus fugit eum tempore in
              enim, error ea qui voluptas aperiam, quas earum eaque, nemo
              dolores repellat maiores delectus dolore odio. Voluptate id quod
              quibusdam libero.
            </p>
          </div>
        </div>
      </div>

      {/* 2,3번 */}
      <div className="flex justify-between">
        <div className="h-[300px] w-[49%] border p-5 rounded-2xl bg-gray-100 flex gap-4">
          <img src={LeniNo} alt="No_img" className="block" />
          <div className="flex flex-col gap-2 ">
            <h3 className="font-bold text-2xl hover:underline cursor-pointer">
              Lorem, ipsum dolor.
            </h3>
            <p className={cardText}>NONONONO</p>
            <p className={cardText}>25/11/21</p>
            <p className={cardText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus iusto enim illo repellendus dolorem distinctio quae iure
              nostrum voluptate eum!
            </p>
          </div>
        </div>
        <div className="h-[300px] w-[49%] border p-5 rounded-2xl bg-gray-100 flex gap-4">
          <img src={LeniNo} alt="No_img" className="block" />
          <div className="flex flex-col gap-2 ">
            <h3 className="font-bold text-2xl hover:underline cursor-pointer">
              Lorem, ipsum dolor.
            </h3>
            <p className={cardText}>NONONONO</p>
            <p className={cardText}>25/11/21</p>
            <p className={cardText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              magnam soluta aspernatur laudantium perspiciatis sapiente iure
              consectetur eum? Beatae, quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotView;
