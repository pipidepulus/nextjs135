
const { searchQuery, filter, page = 1, pageSize = 10 } = params;
const skipAmount = (page - 1) * pageSize;
.skip(skipAmount)
.limit(pageSize);
const totalQuestions = await Question.countDocuments(query);
const isNext = totalQuestions > skipAmount +  questions.length;
return { questions, isNext };


<div className="mt-10">
        <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNextQuestions}
        />
      </div>