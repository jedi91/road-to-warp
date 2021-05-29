import { TextField, Chip } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import { FC } from "react";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@material-ui/icons/TrendingDownOutlined";

export type OrderDirection = "ascending" | "descending";

interface TimelineSearchProps {
  /**
   * Array of decades to filter by
   * @default []
   */
  decades?: string[];
  /**
   * Array of selected decades
   * @default []
   */
  selectedDecades?: string[];
  /**
   * Direction to order the timeline
   * @default "ascending"
   */
  direction?: OrderDirection;
  /**
   * Callback for when either the search text changes
   * @default () => {}
   */
  onSearchChange?: (text: string) => void;
  /**
   * Callback for when a decade is selected
   * @default () => {}
   */
  onDecadeSelected?: (decade: string) => void;
  /**
   * Callback for when the the direction changes
   * @default () => {}
   */
  onDirectionChange?: (direction: OrderDirection) => void;
}

const TimelineSearch: FC<TimelineSearchProps> = ({
  decades = [],
  selectedDecades = [],
  direction = "ascending",
  onSearchChange = () => {},
  onDecadeSelected = () => {},
  onDirectionChange = () => {},
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TextField
          id="search-box"
          aria-label="search timeline"
          label="Search Timeline"
          variant="outlined"
          style={{ width: "35%" }}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {direction === "ascending" ? (
          <ToggleButton
            style={{ marginLeft: 10 }}
            aria-label="ascending order"
            onClick={() => onDirectionChange("descending")}
          >
            <TrendingUpOutlinedIcon />
          </ToggleButton>
        ) : (
          <ToggleButton
            style={{ marginLeft: 10 }}
            aria-label="descending order"
            onClick={() => onDirectionChange("ascending")}
          >
            <TrendingDownOutlinedIcon />
          </ToggleButton>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          padding: "1vh",
        }}
      >
        {decades.map((decade) => (
          <Chip
            style={{ margin: 10 }}
            label={decade}
            color={
              selectedDecades.includes(decade) ? "primary" : "default"
            }
            onClick={() => onDecadeSelected(decade)}
            aria-label={decade}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineSearch;
