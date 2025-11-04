import { useSearchContext } from "./SearchProvider";
import ResultItem from "../Result/ResultItem";
import ResultOverlay from "../Result/ResultOverlay";
import List from "../List";
import { Dialog, DialogContent, DialogHeader, DialogProps } from "../Dialog";

export interface SearchHistoryDialogProps extends DialogProps {}

export default function SearchHistoryDialog(props: SearchHistoryDialogProps) {
  const { onClose, open } = props;
  const { results, removeResult } = useSearchContext();

  function handleDeletePress(item: string) {
    return () => {
      removeResult(item);
    };
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="Search History" />
      <DialogContent>
        {results.length === 0 && <ResultOverlay.NoResults />}
        <List>
          {results.map((item, index) => (
            <ResultItem key={item} item={item} index={index} list={results} onDeletePress={handleDeletePress} />
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}
