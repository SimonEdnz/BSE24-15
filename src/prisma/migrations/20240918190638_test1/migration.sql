-- CreateTable
CREATE TABLE "User" (
    "userIndex" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255),
    "imageName" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),
    "passwordResetToken" TEXT,
    "passwordResetExpires" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Chat" (
    "messageIndex" SERIAL NOT NULL,
    "messageId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "chatRoomId" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "message" VARCHAR(300) NOT NULL,
    "isDelivered" BOOLEAN NOT NULL DEFAULT false,
    "isRead" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("messageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userIndex_key" ON "User"("userIndex");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_messageIndex_key" ON "Chat"("messageIndex");

-- CreateIndex
CREATE INDEX "Chat_senderId_idx" ON "Chat"("senderId");

-- CreateIndex
CREATE INDEX "Chat_recipientId_idx" ON "Chat"("recipientId");
