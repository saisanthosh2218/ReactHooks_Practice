import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

function SkeltonLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1> This is skeleton loading</h1>{" "}
      <div>
        {loading ? (
          <Skeleton count={5} />
        ) : (
          <p>
            llam ducimus neque? Commodi, facere possimus! Tempora cum, neque aut
            doloribus saepe odit maiores ipsam voluptates ex quidem similique
            eligendi amet ut sequi nam qui iusto, ipsum quos odio. Odit natus
            ratione laborum qui esse consequatur?
          </p>
        )}
      </div>
    </div>
  );
}

export default SkeltonLoading;
