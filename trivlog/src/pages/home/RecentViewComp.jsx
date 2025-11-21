import React from 'react';
import LeniNo from '../../img/leni_No.png';

const cardText = 'hover:underline cursor-pointer';

function RecentViewComp() {
  return (
    <div className="container mx-auto bg-sky-200 h-[750px] p-6 mb-5">
      <p className="text-3xl mb-4 p-4">최근 게시 글</p>
      {/* 1번 */}
      <div className="mb-5 flex flex-col gap-4">
        <div className="h-[200px] border p-3 rounded-2xl bg-gray-100 flex gap-4">
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
        <div className="h-[200px] border p-3 rounded-2xl bg-gray-100 flex gap-4">
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
        <div className="h-[200px] border p-3 rounded-2xl bg-gray-100 flex gap-4">
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
    </div>
  );
}

export default RecentViewComp;
