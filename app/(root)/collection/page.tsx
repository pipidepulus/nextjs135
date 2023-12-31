import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { QuestionFilters } from "@/constants/filters";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { Key } from "react";

export default async function Collection() {
  const { userId } = auth();
  if (!userId) return null;

  const result = await getSavedQuestions({
    clerkId: userId,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={QuestionFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result?.questions.length > 0 ? (
          result?.questions.map(
            (question: {
              _id: Key | null | undefined;
              title: string;
              tags: { _id: string; name: string }[];
              author: {
                _id: string;
                clerkId: string;
                name: string;
                picture: string;
              };
              upVotes: object[];
              views: number;
              answers: object[];
              createdAt: Date;
            }) => (
              <QuestionCard
                key={question._id}
                _id={question._id as string}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upVotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            )
          )
        ) : (
          <NoResult
            title="There is no saved questions to show"
            description="Be the first to break the silence! rocket Ask a question and kickstart
           the discussion. Our query could be the next big thing others learn from.
           Get involved! lamp"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
