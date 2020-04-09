async function feed(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { trailName_contains: args.filter },
          { trailCondition_contains: args.filter },
        ],
      }
    : {}

  const reviews = await context.prisma.reviews({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  const count = await context.prisma
    .reviewsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    reviews,
    count,
  }
}

module.exports = {
  feed,
}
