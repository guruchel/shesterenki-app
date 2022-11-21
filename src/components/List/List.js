import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as Grid } from "react-window";

const List = () => {
  return (
    <section>
      <h2>ПРОДУКЦИЯ</h2>
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            className=""
            height={height}
            rowHeight={280}
            columnWidth={width / 3}
            rowCount={1000}
            itemCount={1000}
            itemSize={35}
            width={width}></Grid>
        )}
      </AutoSizer>
    </section>
  );
};

export default React.memo(List);
